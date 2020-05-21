import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(_route?: ActivatedRouteSnapshot, _state?: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
