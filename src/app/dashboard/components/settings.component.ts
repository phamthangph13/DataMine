import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  template: `
    <div class="page-header">
      <h1 class="page-title">Cài đặt</h1>
      <p class="page-description">Quản lý cài đặt tài khoản và hệ thống</p>
    </div>
    
    <div class="content-placeholder">
      <div class="placeholder-text">
        Nội dung trang Cài đặt sẽ được cập nhật sau
      </div>
    </div>
  `,
  styles: [`
    /* Định nghĩa CSS variables cần thiết */
    :host {
      --primary-color: #1a73e8;
      --primary-light: #e8f0fe;
      --primary-dark: #0d47a1;
      --accent-color: #039be5;
      --text-primary: #202124;
      --text-secondary: #5f6368;
      --background-light: #ffffff;
      --background-grey: #f1f3f4;
      --border-color: #dadce0;
      --shadow-color: rgba(60, 64, 67, 0.1);
      display: block;
    }
    
    .page-header {
      background: linear-gradient(to right, #1a73e8, #039be5);
      padding: 20px 24px;
      border-radius: 8px;
      color: white;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      margin-bottom: 24px;
    }
    
    .page-title {
      margin: 0 0 4px 0;
      font-size: 24px;
      font-weight: 500;
    }
    
    .page-description {
      margin: 0;
      opacity: 0.9;
      font-size: 14px;
    }
    
    .content-placeholder {
      background: white;
      border-radius: 8px;
      padding: 40px;
      box-shadow: 0 1px 4px rgba(60, 64, 67, 0.1);
      text-align: center;
    }
    
    .placeholder-text {
      color: #5f6368;
      font-size: 18px;
    }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class SettingsComponent {} 