import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-home',
  template: `
    <div class="page-header">
      <h1 class="page-title">Bảng điều khiển</h1>
      <p class="page-description">Chào mừng bạn đến với hệ thống DataMine</p>
    </div>
    
    <div class="dashboard-content">
      <div class="dashboard-overview">
        <div class="stats-container">
          <div class="stat-card">
            <div class="stat-icon">
              <i class="material-icons">cloud_download</i>
            </div>
            <div class="stat-info">
              <div class="stat-value">128 GB</div>
              <div class="stat-title">Dữ liệu đã khai thác</div>
            </div>
            <div class="stat-trend up">
              <i class="material-icons">trending_up</i>
              <span>12%</span>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">
              <i class="material-icons">assessment</i>
            </div>
            <div class="stat-info">
              <div class="stat-value">24</div>
              <div class="stat-title">Báo cáo phân tích</div>
            </div>
            <div class="stat-trend up">
              <i class="material-icons">trending_up</i>
              <span>8%</span>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">
              <i class="material-icons">storage</i>
            </div>
            <div class="stat-info">
              <div class="stat-value">12</div>
              <div class="stat-title">Bộ dữ liệu</div>
            </div>
            <div class="stat-trend flat">
              <i class="material-icons">trending_flat</i>
              <span>0%</span>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">
              <i class="material-icons">verified_user</i>
            </div>
            <div class="stat-info">
              <div class="stat-value">Premium</div>
              <div class="stat-title">Gói tài khoản</div>
            </div>
            <div class="stat-badge">
              <span>Active</span>
            </div>
          </div>
        </div>
        
        <div class="row-container">
          <div class="chart-card">
            <div class="card-header">
              <h3>Phân tích dữ liệu theo thời gian</h3>
              <div class="card-actions">
                <button class="card-action-btn">
                  <i class="material-icons">more_vert</i>
                </button>
              </div>
            </div>
            <div class="chart-container">
              <div class="chart-placeholder">
                <div class="chart-bars">
                  <div class="chart-bar" style="height: 30%"></div>
                  <div class="chart-bar" style="height: 50%"></div>
                  <div class="chart-bar" style="height: 70%"></div>
                  <div class="chart-bar" style="height: 60%"></div>
                  <div class="chart-bar" style="height: 80%"></div>
                  <div class="chart-bar" style="height: 65%"></div>
                  <div class="chart-bar" style="height: 90%"></div>
                </div>
              </div>
              <div class="chart-legend">
                <div class="legend-item">
                  <div class="legend-color blue"></div>
                  <div class="legend-text">Dữ liệu khai thác</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="activity-card">
            <div class="card-header">
              <h3>Hoạt động gần đây</h3>
              <div class="card-actions">
                <button class="card-action-btn">
                  <i class="material-icons">refresh</i>
                </button>
              </div>
            </div>
            <div class="activity-list">
              <div class="activity-item">
                <div class="activity-icon">
                  <i class="material-icons">add_circle</i>
                </div>
                <div class="activity-details">
                  <div class="activity-title">Tạo báo cáo mới</div>
                  <div class="activity-time">Hôm nay, 10:30</div>
                </div>
              </div>
              
              <div class="activity-item">
                <div class="activity-icon">
                  <i class="material-icons">upload_file</i>
                </div>
                <div class="activity-details">
                  <div class="activity-title">Tải lên bộ dữ liệu</div>
                  <div class="activity-time">Hôm nay, 09:15</div>
                </div>
              </div>
              
              <div class="activity-item">
                <div class="activity-icon">
                  <i class="material-icons">analytics</i>
                </div>
                <div class="activity-details">
                  <div class="activity-title">Phân tích dữ liệu khách hàng</div>
                  <div class="activity-time">Hôm qua, 14:45</div>
                </div>
              </div>
              
              <div class="activity-item">
                <div class="activity-icon">
                  <i class="material-icons">share</i>
                </div>
                <div class="activity-details">
                  <div class="activity-title">Chia sẻ báo cáo</div>
                  <div class="activity-time">Hôm qua, 11:20</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="row-container">
          <div class="sources-card">
            <div class="card-header">
              <h3>Nguồn dữ liệu đã kết nối</h3>
              <div class="card-actions">
                <button class="add-source-btn">
                  <i class="material-icons">add</i> Thêm nguồn
                </button>
              </div>
            </div>
            <div class="sources-list">
              <div class="source-item">
                <div class="source-icon database"></div>
                <div class="source-info">
                  <div class="source-name">MySQL Database</div>
                  <div class="source-status">
                    <span class="status-dot active"></span> Đang kết nối
                  </div>
                </div>
                <div class="source-size">42.5 GB</div>
              </div>
              
              <div class="source-item">
                <div class="source-icon api"></div>
                <div class="source-info">
                  <div class="source-name">REST API Service</div>
                  <div class="source-status">
                    <span class="status-dot active"></span> Đang kết nối
                  </div>
                </div>
                <div class="source-size">28.2 GB</div>
              </div>
              
              <div class="source-item">
                <div class="source-icon cloud"></div>
                <div class="source-info">
                  <div class="source-name">Cloud Storage</div>
                  <div class="source-status">
                    <span class="status-dot active"></span> Đang kết nối
                  </div>
                </div>
                <div class="source-size">56.8 GB</div>
              </div>
            </div>
          </div>
          
          <div class="quick-actions">
            <h3>Thao tác nhanh</h3>
            <div class="actions-grid">
              <button class="action-btn">
                <i class="material-icons">add_circle</i>
                <span>Tạo báo cáo</span>
              </button>
              <button class="action-btn">
                <i class="material-icons">cloud_upload</i>
                <span>Tải lên dữ liệu</span>
              </button>
              <button class="action-btn">
                <i class="material-icons">sync</i>
                <span>Đồng bộ nguồn</span>
              </button>
              <button class="action-btn">
                <i class="material-icons">share</i>
                <span>Chia sẻ</span>
              </button>
            </div>
          </div>
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
    
    .dashboard-content {
      margin-top: 20px;
    }
    
    .dashboard-overview {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    .stats-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    
    .stat-card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 1px 3px rgba(60, 64, 67, 0.1);
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    
    .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .stat-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: #1a73e8;
    }
    
    .stat-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: #e8f0fe;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
    }
    
    .stat-icon i {
      color: #1a73e8;
      font-size: 24px;
    }
    
    .stat-info {
      flex-grow: 1;
    }
    
    .stat-value {
      font-size: 24px;
      font-weight: 600;
      color: #202124;
      margin-bottom: 4px;
    }
    
    .stat-title {
      font-size: 14px;
      color: #5f6368;
    }
    
    .stat-trend {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 500;
      padding: 4px 8px;
      border-radius: 16px;
    }
    
    .stat-trend.up {
      color: #34a853;
      background-color: rgba(52, 168, 83, 0.1);
    }
    
    .stat-trend.down {
      color: #ea4335;
      background-color: rgba(234, 67, 53, 0.1);
    }
    
    .stat-trend.flat {
      color: #fbbc05;
      background-color: rgba(251, 188, 5, 0.1);
    }
    
    .stat-trend i {
      font-size: 16px;
      margin-right: 2px;
    }
    
    .stat-badge {
      padding: 4px 12px;
      background-color: #e8f0fe;
      color: #1a73e8;
      border-radius: 16px;
      font-size: 12px;
      font-weight: 500;
    }
    
    .row-container {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;
    }
    
    @media (max-width: 1024px) {
      .row-container {
        grid-template-columns: 1fr;
      }
    }
    
    .chart-card, .activity-card, .sources-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(60, 64, 67, 0.1);
      overflow: hidden;
    }
    
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid #dadce0;
    }
    
    .card-header h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      color: #202124;
    }
    
    .card-actions {
      display: flex;
      gap: 8px;
    }
    
    .card-action-btn {
      background: transparent;
      border: none;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      color: #5f6368;
      transition: all 0.2s ease;
    }
    
    .card-action-btn:hover {
      background-color: #f1f3f4;
      color: #1a73e8;
    }
    
    .chart-container {
      padding: 20px;
      height: 300px;
    }
    
    .chart-placeholder {
      height: 85%;
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
      padding: 0 10px;
    }
    
    .chart-bars {
      display: flex;
      align-items: flex-end;
      justify-content: space-around;
      height: 100%;
      width: 100%;
      gap: 16px;
    }
    
    .chart-bar {
      flex: 1;
      background: linear-gradient(180deg, #1a73e8 0%, #039be5 100%);
      border-radius: 4px 4px 0 0;
      transition: all 0.3s ease;
    }
    
    .chart-bar:hover {
      background: #0d47a1;
      transform: scaleY(1.05);
    }
    
    .chart-legend {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 15px;
    }
    
    .legend-item {
      display: flex;
      align-items: center;
    }
    
    .legend-color {
      width: 12px;
      height: 12px;
      border-radius: 2px;
      margin-right: 8px;
    }
    
    .legend-color.blue {
      background: #1a73e8;
    }
    
    .legend-text {
      font-size: 12px;
      color: #5f6368;
    }
    
    .activity-list {
      padding: 12px 16px;
    }
    
    .activity-item {
      display: flex;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #dadce0;
    }
    
    .activity-item:last-child {
      border-bottom: none;
    }
    
    .activity-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #e8f0fe;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
    }
    
    .activity-icon i {
      color: #1a73e8;
      font-size: 18px;
    }
    
    .activity-details {
      flex-grow: 1;
    }
    
    .activity-title {
      font-size: 14px;
      color: #202124;
      margin-bottom: 4px;
    }
    
    .activity-time {
      font-size: 12px;
      color: #5f6368;
    }
    
    .sources-list {
      padding: 12px 16px;
    }
    
    .source-item {
      display: flex;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #dadce0;
    }
    
    .source-item:last-child {
      border-bottom: none;
    }
    
    .source-icon {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
      background-size: 24px;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    .source-icon.database {
      background-color: #e8f0fe;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="%231a73e8" d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>');
    }
    
    .source-icon.api {
      background-color: #e6f4ea;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="%2334a853" d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6zm6-6h4v3h-4zM6 7h5v5H6zm6 4h4v6h-4z"/></svg>');
    }
    
    .source-icon.cloud {
      background-color: #e8f0fe;
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="%231a73e8" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/></svg>');
    }
    
    .source-info {
      flex-grow: 1;
    }
    
    .source-name {
      font-size: 14px;
      font-weight: 500;
      color: #202124;
      margin-bottom: 4px;
    }
    
    .source-status {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #5f6368;
    }
    
    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 6px;
    }
    
    .status-dot.active {
      background-color: #34a853;
    }
    
    .source-size {
      font-size: 14px;
      font-weight: 500;
      color: #202124;
    }
    
    .add-source-btn {
      display: flex;
      align-items: center;
      background-color: #e8f0fe;
      color: #1a73e8;
      border: none;
      border-radius: 4px;
      padding: 6px 12px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    
    .add-source-btn:hover {
      background-color: #1a73e8;
      color: white;
    }
    
    .add-source-btn i {
      font-size: 18px;
      margin-right: 4px;
    }
    
    .quick-actions {
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(60, 64, 67, 0.1);
      padding: 20px;
    }
    
    .quick-actions h3 {
      margin: 0 0 16px 0;
      font-size: 16px;
      font-weight: 500;
      color: #202124;
    }
    
    .actions-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    
    .action-btn {
      background-color: white;
      border: 1px solid #dadce0;
      border-radius: 8px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .action-btn:hover {
      background-color: #e8f0fe;
      border-color: #1a73e8;
      transform: translateY(-2px);
    }
    
    .action-btn i {
      font-size: 28px;
      margin-bottom: 8px;
      color: #1a73e8;
    }
    
    .action-btn span {
      font-size: 14px;
      color: #202124;
      font-weight: 500;
    }
    
    @media (max-width: 768px) {
      .stats-container {
        grid-template-columns: 1fr;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class DashboardHomeComponent {
} 