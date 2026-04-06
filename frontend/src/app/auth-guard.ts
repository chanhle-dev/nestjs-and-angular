import { inject } from '@angular/core/primitives/di';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  // return true;

  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('AuthGuard: Checking authentication status...');
  console.log('AuthGuard: isLoggedIn =', authService.checkAuthStatus());
  if (authService.checkAuthStatus()) {
    return true;
  } else {
    // Redirect unauthorized users to login page
    return router.parseUrl('/login');
  }
  
};
