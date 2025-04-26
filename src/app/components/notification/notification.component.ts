import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { NotificationService, Notification } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="notification" 
         class="notification-container"
         [ngClass]="'notification-' + notification.type">
      <div class="notification-content">
        <span class="message">{{ notification.message }}</span>
        <button class="close-btn" (click)="close()">×</button>
      </div>
    </div>
  `,
  styles: [`
    .notification-container {
      position: fixed;
      top: 20px;
      right: 20px;
      max-width: 350px;
      min-width: 250px;
      padding: 12px;
      border-radius: 4px;
      z-index: 9999;
      animation: slide-in 0.3s ease-out;
    }

    @keyframes slide-in {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    .notification-success {
      background-color: #4caf50;
      color: white;
    }

    .notification-error {
      background-color: #f44336;
      color: white;
    }

    .notification-info {
      background-color: #2196F3;
      color: white;
    }

    .notification-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .message {
      flex-grow: 1;
    }

    .close-btn {
      background: none;
      border: none;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      margin-left: 10px;
      padding: 0 5px;
    }
  `]
})
export class NotificationComponent implements OnInit, OnDestroy {
  notification: Notification | null = null;
  private subscription: Subscription = new Subscription();

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.subscription = this.notificationService.notification$.subscribe(
      notification => {
        this.notification = notification;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  close(): void {
    this.notificationService.clear();
  }
} 