# DataMine Authentication Backend

A Node.js backend service that handles user authentication with email verification and password reset capabilities.

## Features

- User registration with email verification
- User login with JWT authentication
- Password reset via email
- MongoDB database integration

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `GET /api/auth/verify-email/:token` - Verify user email
- `POST /api/auth/login` - Login user
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password/:token` - Reset password with token

## Setup

1. Create a `.env` file in the server root directory with the following content:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/datamine
JWT_SECRET=datamine_secret_key_change_in_production
JWT_EXPIRE=7d

# Email Configuration
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SENDER_EMAIL=dounecompany@gmail.com
SENDER_NAME=DataMine
EMAIL_USERNAME=dounecompany@gmail.com
EMAIL_PASSWORD=your_email_password_here
USE_SSL=true
BASE_URL=http://localhost:4200
```

2. Install dependencies:

```
npm install
```

3. Run the server:

```
npm run dev
```

## Technologies Used

- Node.js & Express
- MongoDB & Mongoose
- JWT for authentication
- Nodemailer for email sending 