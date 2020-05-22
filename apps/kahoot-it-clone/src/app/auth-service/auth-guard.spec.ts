import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth-guard';
import { AuthService } from './auth.service';

describe('authGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: AuthService,
          useValue: {
            isAuthenticated: jest
              .fn()
              .mockReturnValueOnce(false)
              .mockReturnValueOnce(true)
          }
        }
      ]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should create', () => {
    expect(guard).toBeTruthy();
  });

  it('should authenticate routes', () => {
    expect(guard.canActivate()).toBe(false);

    expect(guard.canActivate()).toBe(true);
  });
});
