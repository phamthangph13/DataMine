import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, HttpClientModule],
  template: `
    <div class="auth-form">
      <div class="auth-header">
        <h2>Đặt lại mật khẩu</h2>
        <p>Nhập mật khẩu mới của bạn</p>
      </div>
      
      <div class="alert alert-success" *ngIf="successMessage">{{ successMessage }}</div>
      <div class="alert alert-danger" *ngIf="errorMessage">{{ errorMessage }}</div>
      
      <form [formGroup]="resetPasswordForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="password">Mật khẩu mới</label>
          <div class="input-wrapper">
            <input 
              [type]="showPassword ? 'text' : 'password'" 
              id="password" 
              formControlName="password"
              placeholder="Nhập mật khẩu mới"
              class="form-control"
            >
            <button 
              type="button" 
              class="toggle-password" 
              (click)="togglePasswordVisibility()"
            >
              <i class="fa" [ngClass]="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
            </button>
          </div>
          <div class="error-message" *ngIf="resetPasswordForm.get('password')?.touched && resetPasswordForm.get('password')?.invalid">
            <span *ngIf="resetPasswordForm.get('password')?.errors?.['required']">Mật khẩu là bắt buộc</span>
            <span *ngIf="resetPasswordForm.get('password')?.errors?.['minlength']">Mật khẩu phải có ít nhất 8 ký tự</span>
          </div>
        </div>
        
        <div class="form-group">
          <label for="confirmPassword">Xác nhận mật khẩu</label>
          <input 
            type="password" 
            id="confirmPassword" 
            formControlName="confirmPassword"
            placeholder="Nhập lại mật khẩu mới"
            class="form-control"
          >
          <div class="error-message" *ngIf="resetPasswordForm.get('confirmPassword')?.touched && resetPasswordForm.get('confirmPassword')?.invalid">
            <span *ngIf="resetPasswordForm.get('confirmPassword')?.errors?.['required']">Xác nhận mật khẩu là bắt buộc</span>
          </div>
          <div class="error-message" *ngIf="resetPasswordForm.errors?.['passwordMismatch'] && resetPasswordForm.get('confirmPassword')?.touched">
            <span>Mật khẩu không khớp</span>
          </div>
        </div>
        
        <button 
          type="submit" 
          class="btn-submit"
          [disabled]="resetPasswordForm.invalid || isLoading"
        >
          {{ isLoading ? 'Đang xử lý...' : 'Đặt lại mật khẩu' }}
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
    
    .input-wrapper {
      position: relative;
    }
    
    .toggle-password {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      color: #666;
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
    
    .alert {
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;
    }
    
    .alert-success {
      background-color: #e8f5e9;
      color: #2e7d32;
      border: 1px solid #c8e6c9;
    }
    
    .alert-danger {
      background-color: #ffebee;
      color: #c62828;
      border: 1px solid #ffcdd2;
    }
  `
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  token: string = '';
  successMessage = '';
  errorMessage = '';
  isLoading = false;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['token']) {
        this.token = params['token'];
      } else {
        this.errorMessage = 'Invalid password reset link';
        setTimeout(() => {
          this.router.navigate(['/auth/forgot-password']);
        }, 3000);
      }
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    
    if (password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    
    return null;
  }

  onSubmit() {
    if (this.resetPasswordForm.invalid || !this.token) {
      return;
    }

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';
    
    const { password } = this.resetPasswordForm.value;
    
    this.authService.resetPassword(this.token, password).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.successMessage = response.message || 'Password reset successful. You can now log in with your new password.';
        // Redirect to login page after 3 seconds
        setTimeout(() => {
          this.router.navigate(['/auth/login']);
        }, 3000);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.message || 'Failed to reset password. The link may be invalid or expired.';
      }
    });
  }
} 