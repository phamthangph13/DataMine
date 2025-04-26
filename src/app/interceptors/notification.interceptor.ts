import { HttpInterceptorFn, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NotificationService } from '../services/notification.service';

/**
 * Interceptor for showing notifications based on API call results
 * Ignores auth API calls as they're handled by the auth service
 */
export const notificationInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService = inject(NotificationService);
  
  // Skip auth requests as they are handled in the auth service
  if (req.url.includes('/api/auth/')) {
    return next(req);
  }
  
  return next(req).pipe(
    tap(event => {
      if (event instanceof HttpResponse && event.status === 200 && !req.url.includes('/api/auth/')) {
        // Show success notification for non-auth successful responses
        notificationService.showSuccess('Thao tác thành công');
      }
    }),
    catchError((error: HttpErrorResponse) => {
      if (!req.url.includes('/api/auth/')) {
        // Only handle non-auth endpoints as auth has its own error handling
        let errorMessage = 'Đã xảy ra lỗi';
        
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Lỗi: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = error.error?.message || `Mã lỗi: ${error.status}, Thông báo: ${error.message}`;
        }
        
        notificationService.showError(errorMessage);
      }
      return throwError(() => error);
    })
  );
}; 