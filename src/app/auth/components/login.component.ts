import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  template: `
    <div class="form-container">
      <div class="form-header">
        <h1>Đăng nhập</h1>
        <p>Chào mừng trở lại! Đăng nhập để tiếp tục sử dụng hệ thống</p>
      </div>
      
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="email">Email</label>
          <div class="input-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <input 
              type="email" 
              id="email" 
              formControlName="email"
              placeholder="Nhập email của bạn"
              class="form-control"
            >
          </div>
          <div class="error-message" *ngIf="loginForm.get('email')?.touched && loginForm.get('email')?.invalid">
            <span *ngIf="loginForm.get('email')?.errors?.['required']">Email là bắt buộc</span>
            <span *ngIf="loginForm.get('email')?.errors?.['email']">Email không hợp lệ</span>
          </div>
        </div>
        
        <div class="form-group">
          <div class="label-group">
            <label for="password">Mật khẩu</label>
            <a [routerLink]="['/auth/forgot-password']" class="forgot-link">Quên mật khẩu?</a>
          </div>
          <div class="input-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <input 
              [type]="showPassword ? 'text' : 'password'" 
              id="password" 
              formControlName="password"
              placeholder="Nhập mật khẩu"
              class="form-control"
            >
            <button 
              type="button" 
              class="toggle-password" 
              (click)="togglePasswordVisibility()"
            >
              <svg *ngIf="!showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <svg *ngIf="showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            </button>
          </div>
          <div class="error-message" *ngIf="loginForm.get('password')?.touched && loginForm.get('password')?.invalid">
            <span *ngIf="loginForm.get('password')?.errors?.['required']">Mật khẩu là bắt buộc</span>
            <span *ngIf="loginForm.get('password')?.errors?.['minlength']">Mật khẩu phải có ít nhất 6 ký tự</span>
          </div>
        </div>
        
        <div class="remember-me">
          <div class="checkbox-wrapper">
            <input type="checkbox" id="remember" formControlName="rememberMe">
            <label for="remember">Ghi nhớ đăng nhập</label>
          </div>
        </div>
        
        <button 
          type="submit" 
          class="btn-primary"
          [disabled]="loginForm.invalid"
        >
          Đăng nhập
        </button>
      </form>
      
      <div class="social-login">
        <div class="divider">
          <span>Hoặc đăng nhập bằng</span>
        </div>
        
        <div class="social-buttons">
          <button type="button" class="btn-social btn-google" (click)="loginWithGoogle()">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#4285F4">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
            </svg>
            <span>Google</span>
          </button>
          
          <button type="button" class="btn-social btn-facebook" (click)="loginWithFacebook()">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </button>
        </div>
      </div>
      
      <div class="auth-footer">
        <p>Chưa có tài khoản? <a [routerLink]="['/auth/register']" class="register-link">Đăng ký ngay</a></p>
      </div>
    </div>
  `,
  styles: `
    .form-container {
      width: 100%;
      max-width: 400px;
    }
    
    .form-header {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .form-header h1 {
      font-size: 1.75rem;
      font-weight: 700;
      color: #1a202c;
      margin-bottom: 0.75rem;
    }
    
    .form-header p {
      color: #64748b;
      font-size: 0.95rem;
    }
    
    .form-group {
      margin-bottom: 1.25rem;
    }
    
    .label-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    
    label {
      display: block;
      font-size: 0.875rem;
      font-weight: 500;
      color: #4a5568;
      margin-bottom: 0.5rem;
    }
    
    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }
    
    .input-wrapper svg {
      position: absolute;
      left: 1rem;
      color: #a0aec0;
    }
    
    .form-control {
      width: 100%;
      padding: 0.75rem 0.75rem 0.75rem 2.75rem;
      font-size: 0.95rem;
      line-height: 1.5;
      color: #2d3748;
      background-color: #f7fafc;
      border: 1px solid #e2e8f0;
      border-radius: 0.5rem;
      transition: all 0.2s ease-in-out;
    }
    
    .form-control:focus {
      background-color: #fff;
      border-color: #4299e1;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
      outline: none;
    }
    
    .form-control::placeholder {
      color: #a0aec0;
    }
    
    .toggle-password {
      position: absolute;
      right: 0.75rem;
      background: none;
      border: none;
      color: #a0aec0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      z-index: 1;
    }
    
    .toggle-password:hover {
      color: #718096;
    }
    
    .error-message {
      font-size: 0.8rem;
      color: #e53e3e;
      margin-top: 0.25rem;
    }
    
    .forgot-link {
      font-size: 0.8rem;
      color: #4299e1;
      text-decoration: none;
      font-weight: 500;
    }
    
    .forgot-link:hover {
      text-decoration: underline;
    }
    
    .remember-me {
      margin-bottom: 1.5rem;
    }
    
    .checkbox-wrapper {
      display: flex;
      align-items: center;
    }
    
    .checkbox-wrapper input[type="checkbox"] {
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
      accent-color: #4299e1;
    }
    
    .checkbox-wrapper label {
      font-size: 0.875rem;
      color: #4a5568;
      margin-bottom: 0;
    }
    
    .btn-primary {
      display: block;
      width: 100%;
      padding: 0.75rem 1rem;
      font-size: 0.95rem;
      font-weight: 600;
      color: #fff;
      background-color: #4299e1;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
    
    .btn-primary:hover {
      background-color: #3182ce;
      transform: translateY(-1px);
    }
    
    .btn-primary:active {
      background-color: #2b6cb0;
      transform: translateY(0);
    }
    
    .btn-primary:disabled {
      background-color: #90cdf4;
      cursor: not-allowed;
      transform: none;
    }
    
    .social-login {
      margin-top: 2rem;
    }
    
    .divider {
      display: flex;
      align-items: center;
      text-align: center;
      margin-bottom: 1.25rem;
    }
    
    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .divider span {
      padding: 0 0.75rem;
      font-size: 0.8rem;
      color: #718096;
    }
    
    .social-buttons {
      display: flex;
      gap: 1rem;
    }
    
    .btn-social {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.75rem;
      font-size: 0.875rem;
      font-weight: 500;
      border-radius: 0.5rem;
      border: 1px solid #e2e8f0;
      background-color: #fff;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }
    
    .btn-social:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    
    .btn-social:active {
      transform: translateY(0);
    }
    
    .btn-google {
      color: #4a5568;
    }
    
    .btn-facebook {
      background-color: #3b5998;
      border-color: #3b5998;
      color: white;
    }
    
    .auth-footer {
      text-align: center;
      margin-top: 1.5rem;
      font-size: 0.875rem;
      color: #718096;
    }
    
    .register-link {
      color: #4299e1;
      font-weight: 600;
      text-decoration: none;
    }
    
    .register-link:hover {
      text-decoration: underline;
    }
    
    @media (max-width: 480px) {
      .social-buttons {
        flex-direction: column;
        gap: 0.75rem;
      }
    }
  `
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  loginWithGoogle() {
    console.log('Login with Google clicked');
    // TODO: Implement Google login
  }

  loginWithFacebook() {
    console.log('Login with Facebook clicked');
    // TODO: Implement Facebook login
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login form submitted', this.loginForm.value);
      // TODO: Implement authentication logic
    }
  }
} 