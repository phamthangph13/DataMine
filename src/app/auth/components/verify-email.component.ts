import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  template: `
    <div class="verify-container">
      <div class="verify-card">
        <div class="icon" [ngClass]="{'success': isVerified, 'error': isError}">
          <i class="fa" [ngClass]="isVerified ? 'fa-check' : 'fa-exclamation'"></i>
        </div>
        
        <h2>{{ title }}</h2>
        <p>{{ message }}</p>
        
        <div class="actions">
          <a [routerLink]="['/auth/login']" class="btn-login">Đăng nhập</a>
        </div>
      </div>
    </div>
  `,
  styles: `
    .verify-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 1rem;
    }
    
    .verify-card {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      text-align: center;
      max-width: 400px;
      width: 100%;
    }
    
    .icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      font-size: 2rem;
    }
    
    .icon.success {
      background-color: #e8f5e9;
      color: #2e7d32;
    }
    
    .icon.error {
      background-color: #ffebee;
      color: #c62828;
    }
    
    h2 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      color: #333;
    }
    
    p {
      color: #666;
      margin-bottom: 2rem;
      line-height: 1.6;
    }
    
    .actions {
      margin-top: 1rem;
    }
    
    .btn-login {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background-color: #1e88e5;
      color: white;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.2s;
    }
    
    .btn-login:hover {
      background-color: #1976d2;
    }
  `
})
export class VerifyEmailComponent implements OnInit {
  isVerified = false;
  isError = false;
  title = 'Đang xác thực...';
  message = 'Vui lòng đợi trong khi chúng tôi xác thực email của bạn.';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['token']) {
        this.verifyEmail(params['token']);
      } else {
        this.handleError('Liên kết xác thực không hợp lệ.');
      }
    });
  }

  verifyEmail(token: string): void {
    this.authService.verifyEmail(token).subscribe({
      next: (response) => {
        this.isVerified = true;
        this.title = 'Xác thực thành công!';
        this.message = response.message || 'Email của bạn đã được xác thực. Bạn có thể đăng nhập ngay bây giờ.';
      },
      error: (error) => {
        this.handleError(error.message || 'Đã xảy ra lỗi khi xác thực email. Liên kết có thể đã hết hạn hoặc không hợp lệ.');
      }
    });
  }

  handleError(errorMessage: string): void {
    this.isError = true;
    this.title = 'Xác thực thất bại!';
    this.message = errorMessage;
  }
} 