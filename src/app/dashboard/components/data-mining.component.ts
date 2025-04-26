import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-mining',
  template: `
    <div class="component-container">
      <h1>Khai thác dữ liệu</h1>
      <p>Công cụ khai thác và thu thập dữ liệu đa nguồn</p>
      
      <div class="content-placeholder">
        <div class="placeholder-text">
          Nội dung trang Khai thác dữ liệu sẽ được cập nhật sau
        </div>
      </div>
    </div>
  `,
  styles: [`
    .component-container {
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
    
    .content-placeholder {
      background: white;
      border-radius: 8px;
      padding: 40px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.08);
      text-align: center;
    }
    
    .placeholder-text {
      color: #999;
      font-size: 18px;
    }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class DataMiningComponent {} 