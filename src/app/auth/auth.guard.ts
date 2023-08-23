import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log(authService.isSignedIn)

  if (authService.isSignedIn) {
    return true;
  }

  return router.parseUrl('/sign-in');
};
