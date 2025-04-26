import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<Notification | null>(null);
  
  constructor() {}

  /**
   * Get the notification observable
   */
  get notification$(): Observable<Notification | null> {
    return this.notificationSubject.asObservable();
  }

  /**
   * Show a success notification
   */
  showSuccess(message: string, duration: number = 3000): void {
    this.show({
      message,
      type: 'success',
      duration
    });
  }

  /**
   * Show an error notification
   */
  showError(message: string, duration: number = 5000): void {
    this.show({
      message,
      type: 'error',
      duration
    });
  }

  /**
   * Show an info notification
   */
  showInfo(message: string, duration: number = 3000): void {
    this.show({
      message,
      type: 'info',
      duration
    });
  }

  /**
   * Clear the current notification
   */
  clear(): void {
    this.notificationSubject.next(null);
  }

  /**
   * Show a notification and auto-clear after the specified duration
   */
  private show(notification: Notification): void {
    this.notificationSubject.next(notification);
    
    if (notification.duration) {
      setTimeout(() => {
        this.clear();
      }, notification.duration);
    }
  }
} 