import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotificationService } from '../../services/notification.service';

interface User {
  _id: string;
  name: string;
  email: string;
  isVerified: boolean;
}

interface AuthResponse {
  status: string;
  token?: string;
  data?: {
    user: User;
  };
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5001/api/auth';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private tokenSubject = new BehaviorSubject<string | null>(this.getToken());
  public token$ = this.tokenSubject.asObservable();

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {
    this.loadUserFromLocalStorage();
  }

  private loadUserFromLocalStorage(): void {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      try {
        const user = JSON.parse(userString);
        this.currentUserSubject.next(user);
      } catch (error) {
        console.error('Error parsing user from localStorage', error);
        localStorage.removeItem('currentUser');
      }
    }
  }

  private saveUserToLocalStorage(user: User): void {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  public isLoggedIn(): boolean {
    return !!this.currentUserSubject.value && !!this.getToken();
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap(response => {
          if (response.token && response.data?.user) {
            this.saveToken(response.token);
            this.saveUserToLocalStorage(response.data.user);
            this.currentUserSubject.next(response.data.user);
            this.notificationService.showSuccess('Đăng nhập thành công');
          }
        }),
        catchError(error => {
          this.notificationService.showError('Đăng nhập thất bại: ' + this.getErrorMessage(error));
          return this.handleError(error);
        })
      );
  }

  register(name: string, email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, { name, email, password })
      .pipe(
        tap(response => {
          this.notificationService.showSuccess('Đăng ký thành công. Vui lòng kiểm tra email để xác thực tài khoản.');
        }),
        catchError(error => {
          this.notificationService.showError('Đăng ký thất bại: ' + this.getErrorMessage(error));
          return this.handleError(error);
        })
      );
  }

  forgotPassword(email: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/forgot-password`, { email })
      .pipe(
        tap(response => {
          this.notificationService.showSuccess('Đã gửi email đặt lại mật khẩu.');
        }),
        catchError(error => {
          this.notificationService.showError('Lỗi quên mật khẩu: ' + this.getErrorMessage(error));
          return this.handleError(error);
        })
      );
  }

  resetPassword(token: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/reset-password/${token}`, { password })
      .pipe(
        tap(response => {
          this.notificationService.showSuccess('Đặt lại mật khẩu thành công. Bạn có thể đăng nhập ngay bây giờ.');
        }),
        catchError(error => {
          this.notificationService.showError('Lỗi đặt lại mật khẩu: ' + this.getErrorMessage(error));
          return this.handleError(error);
        })
      );
  }

  verifyEmail(token: string): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.apiUrl}/verify-email/${token}`)
      .pipe(
        tap(response => {
          this.notificationService.showSuccess('Xác thực email thành công. Bạn có thể đăng nhập ngay bây giờ.');
        }),
        catchError(error => {
          this.notificationService.showError('Lỗi xác thực email: ' + this.getErrorMessage(error));
          return this.handleError(error);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.tokenSubject.next(null);
    this.notificationService.showInfo('Đã đăng xuất thành công');
  }

  private getErrorMessage(error: any): string {
    if (error.error instanceof ErrorEvent) {
      return error.error.message;
    } else {
      return error.error?.message || `Mã lỗi: ${error.status}, Thông báo: ${error.message}`;
    }
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = this.getErrorMessage(error);
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
} 