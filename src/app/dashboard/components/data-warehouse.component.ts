import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-warehouse',
  template: `
    <div class="page-header">
      <h1 class="page-title">Kho dữ liệu</h1>
      <p class="page-description">Quản lý và lưu trữ dữ liệu của bạn</p>
    </div>
    
    <div class="content-container">
      <div class="data-warehouse-content">
        <div class="warehouse-cards">
          <div class="warehouse-card">
            <div class="card-icon">
              <i class="material-icons">storage</i>
            </div>
            <div class="card-content">
              <h3>Cơ sở dữ liệu</h3>
              <p>Quản lý và lưu trữ dữ liệu có cấu trúc</p>
              <button class="action-button">
                <i class="material-icons">add</i>
                Thêm mới
              </button>
            </div>
          </div>
          
          <div class="warehouse-card">
            <div class="card-icon">
              <i class="material-icons">cloud_upload</i>
            </div>
            <div class="card-content">
              <h3>File dữ liệu</h3>
              <p>Tải lên và quản lý các file dữ liệu</p>
              <button class="action-button">
                <i class="material-icons">upload_file</i>
                Tải lên
              </button>
            </div>
          </div>
          
          <div class="warehouse-card">
            <div class="card-icon">
              <i class="material-icons">sync</i>
            </div>
            <div class="card-content">
              <h3>API Connection</h3>
              <p>Kết nối và đồng bộ dữ liệu qua API</p>
              <button class="action-button">
                <i class="material-icons">link</i>
                Kết nối
              </button>
            </div>
          </div>
        </div>
        
        <div class="recent-data-section">
          <div class="section-header">
            <h2>Dữ liệu gần đây</h2>
            <div class="section-actions">
              <button class="refresh-button">
                <i class="material-icons">refresh</i>
              </button>
              <div class="search-box">
                <i class="material-icons">search</i>
                <input type="text" placeholder="Tìm kiếm dữ liệu...">
              </div>
            </div>
          </div>
          
          <div class="data-table">
            <table>
              <thead>
                <tr>
                  <th>Tên</th>
                  <th>Loại</th>
                  <th>Kích thước</th>
                  <th>Ngày tạo</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>dataset_users.csv</td>
                  <td>CSV</td>
                  <td>2.4 MB</td>
                  <td>15/06/2023</td>
                  <td class="actions-cell">
                    <button class="icon-button"><i class="material-icons">visibility</i></button>
                    <button class="icon-button"><i class="material-icons">download</i></button>
                    <button class="icon-button"><i class="material-icons">delete</i></button>
                  </td>
                </tr>
                <tr>
                  <td>sales_q2_2023.xlsx</td>
                  <td>Excel</td>
                  <td>4.8 MB</td>
                  <td>10/06/2023</td>
                  <td class="actions-cell">
                    <button class="icon-button"><i class="material-icons">visibility</i></button>
                    <button class="icon-button"><i class="material-icons">download</i></button>
                    <button class="icon-button"><i class="material-icons">delete</i></button>
                  </td>
                </tr>
                <tr>
                  <td>customer_insights.json</td>
                  <td>JSON</td>
                  <td>1.2 MB</td>
                  <td>05/06/2023</td>
                  <td class="actions-cell">
                    <button class="icon-button"><i class="material-icons">visibility</i></button>
                    <button class="icon-button"><i class="material-icons">download</i></button>
                    <button class="icon-button"><i class="material-icons">delete</i></button>
                  </td>
                </tr>
              </tbody>
            </table>
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
    
    .content-container {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    .warehouse-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
    }
    
    .warehouse-card {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px var(--shadow-color);
      display: flex;
      overflow: hidden;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .warehouse-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 8px var(--shadow-color);
    }
    
    .card-icon {
      background-color: var(--primary-light);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    
    .card-icon i {
      font-size: 32px;
      color: var(--primary-color);
    }
    
    .card-content {
      padding: 20px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    
    .card-content h3 {
      margin: 0 0 8px 0;
      color: var(--text-primary);
      font-size: 18px;
      font-weight: 500;
    }
    
    .card-content p {
      color: var(--text-secondary);
      font-size: 14px;
      margin: 0 0 16px 0;
    }
    
    .action-button {
      display: flex;
      align-items: center;
      background: none;
      border: 1px solid var(--primary-color);
      border-radius: 4px;
      color: var(--primary-color);
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      margin-top: auto;
      transition: background-color 0.2s, color 0.2s;
      width: fit-content;
    }
    
    .action-button:hover {
      background-color: var(--primary-color);
      color: white;
    }
    
    .action-button i {
      font-size: 18px;
      margin-right: 4px;
    }
    
    .recent-data-section {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px var(--shadow-color);
      overflow: hidden;
    }
    
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid var(--border-color);
    }
    
    .section-header h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      color: var(--text-primary);
    }
    
    .section-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .refresh-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      color: var(--text-secondary);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    
    .refresh-button:hover {
      background-color: var(--background-grey);
      color: var(--primary-color);
    }
    
    .search-box {
      display: flex;
      align-items: center;
      background-color: var(--background-grey);
      border-radius: 4px;
      padding: 0 12px;
    }
    
    .search-box i {
      color: var(--text-secondary);
      margin-right: 8px;
    }
    
    .search-box input {
      border: none;
      background: none;
      padding: 8px 0;
      outline: none;
      font-size: 14px;
      color: var(--text-primary);
      width: 200px;
    }
    
    .data-table {
      width: 100%;
      overflow-x: auto;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
    }
    
    th, td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid var(--border-color);
    }
    
    th {
      font-weight: 500;
      color: var(--text-secondary);
      font-size: 14px;
    }
    
    td {
      color: var(--text-primary);
      font-size: 14px;
    }
    
    tr:hover {
      background-color: var(--background-grey);
    }
    
    .actions-cell {
      display: flex;
      gap: 8px;
    }
    
    .icon-button {
      background: none;
      border: none;
      color: var(--text-secondary);
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.2s, color 0.2s;
    }
    
    .icon-button:hover {
      background-color: var(--primary-light);
      color: var(--primary-color);
    }
    
    @media (max-width: 768px) {
      .warehouse-cards {
        grid-template-columns: 1fr;
      }
      
      .search-box input {
        width: 120px;
      }
    }
  `],
  standalone: true,
  imports: [CommonModule]
})
export class DataWarehouseComponent {} 