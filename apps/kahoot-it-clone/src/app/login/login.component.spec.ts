import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthService } from '../auth-service/auth.service';

import { LoginComponent } from './login.component';

describe('login', () => {
  let component: LoginComponent;
  let auth: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        LoginComponent,
        {
          provide: AuthService,
          useValue: {
            login: jest.fn
          }
        }
      ]
    });
    component = TestBed.inject(LoginComponent);
    auth = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', async () => {
    const authSpy = spyOn(auth, 'login');
    expect(component.loginForm.value).toEqual({
      email: '',
      password: ''
    });

    component.loginForm.patchValue({
      email: 'test@email.com',
      password: 'password'
    });

    expect(component.loginForm.valid).toBe(true);

    await component.onSubmit();
    expect(authSpy).toBeCalled();
  });
});
