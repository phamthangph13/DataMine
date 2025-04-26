const User = require('../models/user');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { sendEmail } = require('../config/email');

// Helper function to create and send JWT token
const createSendToken = (user, statusCode, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};

// Register a new user
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: 'error',
        message: 'Email already in use'
      });
    }

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password
    });

    // Generate verification token
    const verificationToken = newUser.generateVerificationToken();
    await newUser.save({ validateBeforeSave: false });

    // Create verification URL
    const verificationURL = `${process.env.BASE_URL}/auth/verify-email/${verificationToken}`;

    // Create email message
    const message = `
      <h1>Email Verification</h1>
      <p>Hi ${name},</p>
      <p>Please verify your email by clicking the link below:</p>
      <a href="${verificationURL}" target="_blank">Verify Email</a>
      <p>If you didn't register for an account, please ignore this email.</p>
    `;

    // Send verification email
    await sendEmail(
      email,
      'Email Verification - DataMine',
      message
    );

    // Return success but without token (user needs to verify first)
    res.status(201).json({
      status: 'success',
      message: 'User registered successfully. Please check your email to verify your account.'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'An error occurred during registration. Please try again later.'
    });
  }
};

// Verify email
exports.verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    
    // Hash token from parameters
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    // Find user with matching token and token not expired
    const user = await User.findOne({
      verificationToken: hashedToken,
      verificationTokenExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
        status: 'error',
        message: 'Token is invalid or has expired'
      });
    }

    // Update user as verified and remove verification token
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;
    await user.save({ validateBeforeSave: false });

    res.status(200).json({
      status: 'success',
      message: 'Email verified successfully. You can now log in.'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'An error occurred during email verification. Please try again later.'
    });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if email and password exist
    if (!email || !password) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide email and password'
      });
    }

    // Find user by email and include password in results
    const user = await User.findOne({ email }).select('+password');

    // Check if user exists and password is correct
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        status: 'error',
        message: 'Incorrect email or password'
      });
    }

    // Check if user's email is verified
    if (!user.isVerified) {
      return res.status(401).json({
        status: 'error',
        message: 'Please verify your email before logging in'
      });
    }

    // If all is good, send token to client
    createSendToken(user, 200, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'An error occurred during login. Please try again later.'
    });
  }
};

// Forgot password
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'No user found with that email address'
      });
    }

    // Generate reset token
    const resetToken = user.generatePasswordResetToken();
    await user.save({ validateBeforeSave: false });

    // Create reset URL
    const resetURL = `${process.env.BASE_URL}/auth/reset-password/${resetToken}`;

    // Create email message
    const message = `
      <h1>Password Reset</h1>
      <p>Hi ${user.name},</p>
      <p>We received a request to reset your password. Please click the link below to set a new password:</p>
      <a href="${resetURL}" target="_blank">Reset Password</a>
      <p>If you didn't request a password reset, please ignore this email.</p>
      <p>This link will expire in 10 minutes.</p>
    `;

    // Send password reset email
    await sendEmail(
      email,
      'Password Reset - DataMine',
      message
    );

    res.status(200).json({
      status: 'success',
      message: 'Password reset link sent to your email'
    });
  } catch (error) {
    console.error(error);
    
    // Reset user fields in case of error
    await User.findOneAndUpdate(
      { email: req.body.email },
      { 
        resetPasswordToken: undefined,
        resetPasswordExpires: undefined
      }
    );

    res.status(500).json({
      status: 'error',
      message: 'Error sending password reset email. Please try again later.'
    });
  }
};

// Reset password
exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    // Hash token from parameters
    const hashedToken = crypto
      .createHash('sha256')
      .update(token)
      .digest('hex');

    // Find user with matching token and token not expired
    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
        status: 'error',
        message: 'Token is invalid or has expired'
      });
    }

    // Update password and remove reset token
    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({
      status: 'success',
      message: 'Password reset successful. You can now log in with your new password.'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'An error occurred during password reset. Please try again later.'
    });
  }
}; 