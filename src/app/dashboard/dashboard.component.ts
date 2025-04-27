import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive]
})
export class DashboardComponent {
  menuItems = [
    { name: 'Trang chủ', route: '/dashboard', icon: 'home' },
    { name: 'Khai thác dữ liệu', route: '/dashboard/data-mining', icon: 'engineering' },
    { name: 'Kho dữ liệu', route: '/dashboard/data-warehouse', icon: 'storage' },
    { name: 'Phân tích dữ liệu', route: '/dashboard/data-analysis', icon: 'insights' },
    { name: 'Gói tài khoản', route: '/dashboard/account-package', icon: 'card_membership' },
    { name: 'Cài đặt', route: '/dashboard/settings', icon: 'settings' }
  ];

  isMobileView = false;
  isSidebarCollapsed = false;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    // Initialize mobile view based on screen size
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 768;
    this.isSidebarCollapsed = this.isMobileView;
  }

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
} 