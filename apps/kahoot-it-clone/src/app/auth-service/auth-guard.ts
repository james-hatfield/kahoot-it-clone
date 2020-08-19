import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(route: ActivatedRouteSnapshot) {
    console.log('hit');
    if (
      this.authService.isAuthenticated() &&
      route.routeConfig.path === 'login'
    ) {
      await this.router.navigateByUrl('/dashboard');
    }
    return this.authService.isAuthenticated();
  }
}
