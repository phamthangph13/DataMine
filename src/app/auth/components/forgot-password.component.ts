import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  template: `
    <div class="auth-form">
      <div class="auth-header">
        <h2>Quên mật khẩu</h2>
        <p>Nhập email của bạn để nhận hướng dẫn đặt lại mật khẩu</p>
      </div>
      
      <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            formControlName="email"
            placeholder="Nhập email của bạn"
            class="form-control"
          >
          <div class="error-message" *ngIf="forgotPasswordForm.get('email')?.touched && forgotPasswordForm.get('email')?.invalid">
            <span *ngIf="forgotPasswordForm.get('email')?.errors?.['required']">Email là bắt buộc</span>
            <span *ngIf="forgotPasswordForm.get('email')?.errors?.['email']">Email không hợp lệ</span>
          </div>
        </div>
        
        <button 
          type="submit" 
          class="btn-submit"
          [disabled]="forgotPasswordForm.invalid"
        >
          Gửi hướng dẫn
        </button>
      </form>
      
      <div class="auth-footer">
        <p><a [routerLink]="['/auth/login']">Quay lại đăng nhập</a></p>
      </div>
    </div>
  `,
  styles: `
    .auth-form {
      width: 100%;
      max-width: 400px;
    }
    
    .auth-header {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .auth-header h2 {
      font-size: 1.75rem;
      color: #1e88e5;
      margin-bottom: 0.5rem;
    }
    
    .auth-header p {
      color: #666;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #333;
    }
    
    .form-control {
      width: 100%;
      padding: 0.75rem 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.2s;
    }
    
    .form-control:focus {
      border-color: #1e88e5;
      outline: none;
    }
    
    .error-message {
      color: #e53935;
      font-size: 0.85rem;
      margin-top: 0.5rem;
    }
    
    .btn-submit {
      width: 100%;
      padding: 0.75rem;
      background-color: #1e88e5;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.2s;
      margin-top: 1rem;
    }
    
    .btn-submit:hover {
      background-color: #1976d2;
    }
    
    .btn-submit:disabled {
      background-color: #90caf9;
      cursor: not-allowed;
    }
    
    .auth-footer {
      margin-top: 2rem;
      text-align: center;
      color: #666;
    }
    
    .auth-footer a {
      color: #1e88e5;
      text-decoration: none;
      font-weight: 500;
    }
  `
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      console.log('Forgot password form submitted', this.forgotPasswordForm.value);
      // TODO: Implement forgot password logic
    }
  }
} 