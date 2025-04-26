import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div class="auth-container">
      <div class="auth-content">
        <div class="auth-brand">
          <div class="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
              <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
              <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            <h1>DataMine</h1>
          </div>
          <p class="tagline">Khai thác dữ liệu từ nhiều nền tảng</p>
        </div>

        <div class="auth-info">
          <h2>Thông minh. Đơn giản. Mạnh mẽ.</h2>
          <p class="description">
            Nền tảng khai thác dữ liệu thông minh giúp bạn phân tích và tổng hợp thông tin từ nhiều nguồn khác nhau một cách hiệu quả.
          </p>

          <div class="features">
            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
              <div class="feature-content">
                <h3>Đa nền tảng</h3>
                <p>Kết nối và phân tích dữ liệu từ nhiều nguồn khác nhau</p>
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <div class="feature-content">
                <h3>Phân tích thời gian thực</h3>
                <p>Cập nhật và phân tích dữ liệu theo thời gian thực</p>
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </div>
              <div class="feature-content">
                <h3>Xuất báo cáo</h3>
                <p>Dễ dàng xuất và chia sẻ báo cáo phân tích</p>
              </div>
            </div>
          </div>

          <div class="testimonial">
            <div class="quote">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 11h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"></path>
                <path d="M21 11h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"></path>
                <path d="M10 22h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"></path>
                <path d="M21 22h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"></path>
              </svg>
            </div>
            <p>"DataMine đã giúp công ty chúng tôi tối ưu hóa quy trình phân tích dữ liệu, tiết kiệm 50% thời gian so với trước đây."</p>
            <div class="author">
              <div class="avatar">NN</div>
              <div>
                <p class="name">Nguyễn Nam</p>
                <p class="title">Giám đốc Phân tích, Tech Solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div class="auth-footer">
          <p>© 2023 DataMine. Đã đăng ký Bản quyền.</p>
          <div class="footer-links">
            <a href="#">Chính sách</a>
            <a href="#">Điều khoản</a>
            <a href="#">Liên hệ</a>
          </div>
        </div>
      </div>

      <div class="auth-form-wrapper">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: `
    .auth-container {
      display: flex;
      height: 100vh;
      width: 100%;
      overflow: hidden;
      background-color: #f9fafb;
    }
    
    .auth-content {
      display: flex;
      flex-direction: column;
      width: 60%;
      padding: 2.5rem 4rem;
      background-color: #3982e4;
      background-image: linear-gradient(135deg, #3982e4 0%, #6c5ce7 100%);
      color: white;
      position: relative;
      overflow-y: auto;
    }
    
    .auth-brand {
      margin-bottom: 3rem;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    
    .logo h1 {
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -0.025em;
      margin: 0;
    }
    
    .tagline {
      margin-top: 0.75rem;
      font-size: 1rem;
      opacity: 0.9;
    }
    
    .auth-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .auth-info h2 {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.25rem;
      margin-top: 0;
      letter-spacing: -0.025em;
    }
    
    .description {
      font-size: 1.125rem;
      line-height: 1.6;
      margin-bottom: 2.5rem;
      opacity: 0.9;
      max-width: 32rem;
    }
    
    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2.5rem;
    }
    
    .feature-card {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      transition: transform 0.2s ease, background-color 0.2s ease;
    }
    
    .feature-card:hover {
      transform: translateY(-5px);
      background-color: rgba(255, 255, 255, 0.15);
    }
    
    .feature-icon {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .feature-content h3 {
      font-size: 1.125rem;
      font-weight: 600;
      margin: 0 0 0.5rem 0;
    }
    
    .feature-content p {
      margin: 0;
      font-size: 0.95rem;
      opacity: 0.9;
      line-height: 1.5;
    }
    
    .testimonial {
      background-color: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 12px;
      padding: 1.5rem;
      position: relative;
      margin-bottom: 2rem;
    }
    
    .testimonial .quote {
      position: absolute;
      top: -1rem;
      left: 1.5rem;
      background-color: #6c5ce7;
      border-radius: 50%;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .testimonial p {
      font-size: 1.125rem;
      line-height: 1.6;
      font-style: italic;
      margin: 1rem 0 1.5rem 0;
    }
    
    .author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .author .avatar {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }
    
    .author .name {
      font-weight: 600;
      font-size: 1rem;
      margin: 0;
    }
    
    .author .title {
      font-size: 0.875rem;
      margin: 0.25rem 0 0 0;
      opacity: 0.8;
    }
    
    .auth-footer {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 2rem;
      font-size: 0.875rem;
      opacity: 0.7;
    }
    
    .footer-links {
      display: flex;
      gap: 1.25rem;
    }
    
    .footer-links a {
      color: white;
      text-decoration: none;
      transition: opacity 0.2s ease;
    }
    
    .footer-links a:hover {
      opacity: 0.9;
      text-decoration: underline;
    }
    
    .auth-form-wrapper {
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      background-color: white;
      box-shadow: -10px 0 30px rgba(0, 0, 0, 0.08);
      overflow-y: auto;
    }
    
    @media (max-width: 1024px) {
      .auth-content {
        padding: 2rem;
      }
      
      .auth-info h2 {
        font-size: 2rem;
      }
      
      .features {
        grid-template-columns: 1fr;
      }
    }
    
    @media (max-width: 768px) {
      .auth-container {
        flex-direction: column;
        height: auto;
      }
      
      .auth-content {
        width: 100%;
        min-height: 35vh;
        padding: 2rem;
      }
      
      .auth-form-wrapper {
        width: 100%;
        min-height: 65vh;
      }
      
      .auth-brand {
        margin-bottom: 1.5rem;
      }
      
      .auth-info h2 {
        font-size: 1.75rem;
      }
      
      .description {
        font-size: 1rem;
        margin-bottom: 1.5rem;
      }
      
      .auth-footer {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }
    }
  `
})
export class AuthComponent {
  constructor() {}
} 