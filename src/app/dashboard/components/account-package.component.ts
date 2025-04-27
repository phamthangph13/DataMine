import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PackageInfo {
  id: number;
  name: string;
  price: string;
  features: string[];
  isCurrent: boolean;
  highlight?: boolean;
}

@Component({
  selector: 'app-account-package',
  template: `
    <div class="page-header">
      <h1 class="page-title">Gói tài khoản</h1>
      <p class="page-description">Quản lý và nâng cấp gói dịch vụ của bạn</p>
    </div>
    
    <div class="content-container">
      <div class="subscription-info">
        <div class="info-card">
          <div class="info-section">
            <div class="label">Gói hiện tại:</div>
            <div class="value">Premium</div>
          </div>
          <div class="info-section">
            <div class="label">Ngày gia hạn:</div>
            <div class="value">20/02/2024</div>
          </div>
          <div class="info-section">
            <div class="label">Trạng thái:</div>
            <div class="value status-active"><span class="status-indicator"></span>Đang hoạt động</div>
          </div>
        </div>
      </div>
      
      <h2 class="section-title">Lựa chọn gói dịch vụ</h2>
      
      <div class="card-container">
        @for (pkg of packages; track pkg.id) {
          <div class="package-card" [class.current]="pkg.isCurrent" [class.highlight]="pkg.highlight">
            @if (pkg.highlight) {
              <div class="popular-tag">Phổ biến</div>
            }
            <div class="card-header">
              <h3>{{pkg.name}}</h3>
              @if (pkg.isCurrent) {
                <div class="current-badge">Hiện tại</div>
              }
            </div>
            <div class="card-price">
              <div class="price">{{pkg.price}}</div>
              <div class="price-period">/ tháng</div>
            </div>
            <div class="card-body">
              <ul class="feature-list">
                @for (feature of pkg.features; track $index) {
                  <li>
                    <i class="material-icons check-icon">check_circle</i>
                    <span>{{feature}}</span>
                  </li>
                }
              </ul>
            </div>
            <div class="card-footer">
              @if (pkg.isCurrent) {
                <button class="package-btn current-btn" disabled>Đang sử dụng</button>
              } @else {
                <button class="package-btn upgrade-btn">Nâng cấp</button>
              }
            </div>
          </div>
        }
      </div>
      
      <div class="package-help">
        <div class="help-icon">
          <i class="material-icons">help_outline</i>
        </div>
        <div class="help-text">
          <h4>Bạn cần thêm thông tin?</h4>
          <p>Xem chi tiết về các gói dịch vụ hoặc liên hệ với bộ phận hỗ trợ khách hàng của chúng tôi.</p>
          <button class="help-btn">Xem so sánh chi tiết</button>
        </div>
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
      --accent-light: #e1f5fe;
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
    
    .content-container {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(60, 64, 67, 0.1);
      padding: 24px;
    }
    
    .subscription-info {
      margin-bottom: 32px;
    }
    
    .info-card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 1px 4px rgba(60, 64, 67, 0.1);
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }
    
    .info-section {
      min-width: 200px;
    }
    
    .label {
      font-size: 13px;
      color: #5f6368;
      margin-bottom: 4px;
    }
    
    .value {
      font-size: 16px;
      font-weight: 500;
      color: #202124;
    }
    
    .section-title {
      font-size: 18px;
      font-weight: 500;
      color: #202124;
      margin: 32px 0 20px;
    }
    
    .package-card {
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 4px rgba(60, 64, 67, 0.1);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      position: relative;
      border: 2px solid transparent;
    }
    
    .package-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .package-card.current {
      border-color: #1a73e8;
    }
    
    .package-card.highlight {
      border-color: #039be5;
    }
    
    .popular-tag {
      position: absolute;
      top: 12px;
      right: 0;
      background-color: #039be5;
      color: white;
      font-size: 12px;
      font-weight: 500;
      padding: 4px 12px;
      border-radius: 4px 0 0 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .card-header {
      padding: 20px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #dadce0;
    }
    
    .card-header h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
    }
    
    .current-badge {
      background-color: #e8f0fe;
      color: #1a73e8;
      font-size: 12px;
      font-weight: 500;
      padding: 4px 12px;
      border-radius: 16px;
    }
    
    .card-price {
      padding: 24px 16px;
      text-align: center;
      background-color: white;
    }
    
    .price {
      font-size: 32px;
      font-weight: 700;
      color: #202124;
    }
    
    .price-period {
      font-size: 14px;
      color: #5f6368;
    }
    
    .card-body {
      padding: 16px;
      flex-grow: 1;
    }
    
    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .feature-list li {
      display: flex;
      align-items: flex-start;
      margin-bottom: 12px;
    }
    
    .check-icon {
      color: #1a73e8;
      font-size: 18px;
      margin-right: 8px;
    }
    
    .card-footer {
      padding: 16px;
      border-top: 1px solid #dadce0;
      background-color: #f1f3f4;
    }
    
    .package-btn {
      width: 100%;
      padding: 10px;
      border-radius: 4px;
      border: none;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .upgrade-btn {
      background-color: #1a73e8;
      color: white;
    }
    
    .upgrade-btn:hover {
      background-color: #0d47a1;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    
    .current-btn {
      background-color: white;
      border: 1px solid #dadce0;
      color: #5f6368;
      cursor: not-allowed;
    }
    
    .status-active {
      display: flex;
      align-items: center;
      color: #34a853;
    }
    
    .status-indicator {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #34a853;
      display: inline-block;
      margin-right: 6px;
    }
    
    .package-help {
      margin-top: 40px;
      background-color: #e1f5fe;
      border-radius: 8px;
      padding: 20px;
      display: flex;
      align-items: center;
    }
    
    .help-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #039be5;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-right: 16px;
      flex-shrink: 0;
    }
    
    .help-text {
      flex-grow: 1;
    }
    
    .help-text h4 {
      margin: 0 0 4px 0;
      font-weight: 500;
    }
    
    .help-text p {
      margin: 0 0 12px 0;
      color: #5f6368;
    }
    
    .help-btn {
      background-color: #039be5;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .help-btn:hover {
      background-color: #0288d1;
    }
    
    @media (max-width: 768px) {
      .info-card {
        flex-direction: column;
        gap: 16px;
      }
      
      .info-section {
        min-width: unset;
        width: 100%;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class AccountPackageComponent {
  packages: PackageInfo[] = [
    {
      id: 1,
      name: 'Cơ bản',
      price: '99.000đ',
      features: [
        'Khai thác từ 3 nguồn dữ liệu',
        'Bộ nhớ lưu trữ 5GB',
        'Xử lý 1,000 bản ghi mỗi ngày',
        'Phân tích cơ bản'
      ],
      isCurrent: false
    },
    {
      id: 2,
      name: 'Premium',
      price: '299.000đ',
      features: [
        'Khai thác từ 10 nguồn dữ liệu',
        'Bộ nhớ lưu trữ 20GB',
        'Xử lý không giới hạn bản ghi',
        'Phân tích chuyên sâu',
        'Hỗ trợ API',
        'Báo cáo chi tiết'
      ],
      isCurrent: true,
      highlight: true
    },
    {
      id: 3,
      name: 'Doanh nghiệp',
      price: '899.000đ',
      features: [
        'Khai thác từ nguồn không giới hạn',
        'Bộ nhớ lưu trữ 100GB',
        'Xử lý không giới hạn bản ghi',
        'Phân tích nâng cao với AI',
        'Tích hợp hệ thống',
        'Báo cáo tùy chỉnh',
        'Hỗ trợ 24/7'
      ],
      isCurrent: false
    }
  ];
} 