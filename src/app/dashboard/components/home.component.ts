import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-home',
  template: `
    <div class="dashboard-home">
      <h1>Chào mừng đến với DataMine</h1>
      <p>Nền tảng khai thác và phân tích dữ liệu toàn diện</p>
      
      <div class="stats-cards">
        <div class="stat-card">
          <div class="stat-title">Dữ liệu đã khai thác</div>
          <div class="stat-value">128 GB</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-title">Báo cáo phân tích</div>
          <div class="stat-value">24</div>
        </div>
        
        <div class="stat-card">
          <div class="stat-title">Bộ dữ liệu</div>
          <div class="stat-value">12</div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-home {
      padding: 20px;
    }
    
    h1 {
      color: #1a237e;
      margin-bottom: 10px;
    }
    
    p {
      color: #666;
      margin-bottom: 30px;
    }
    
    .stats-cards {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    
    .stat-card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      min-width: 200px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
      flex: 1;
    }
    
    .stat-title {
      color: #666;
      font-size: 14px;
      margin-bottom: 10px;
    }
    
    .stat-value {
      color: #1a237e;
      font-size: 28px;
      font-weight: bold;
    }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class DashboardHomeComponent {
} 