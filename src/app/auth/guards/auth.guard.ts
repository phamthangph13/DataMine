import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Here you would typically check for a valid token or auth state
  // For demo purposes, we'll assume the user is authenticated
  // In a real app, you would check if the user is logged in
  const isAuthenticated = true;
  
  if (!isAuthenticated) {
    router.navigate(['/auth/login']);
    return false;
  }
  
  return true;
}; 