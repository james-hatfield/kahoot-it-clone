import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth-service/auth.service';

import { SignupComponent } from './signup.component';

describe('signup', () => {
  let component: SignupComponent;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        SignupComponent,
        {
          provide: AuthService,
          useValue: {
            createUser: jest.fn
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn
          }
        }
      ]
    });
    component = TestBed.inject(SignupComponent);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create user and navigate', async () => {
    const routerSpy = spyOn(router, 'navigate');
    expect(component.signUpForm.value).toEqual({
      username: '',
      email: '',
      password: ''
    });

    component.signUpForm.patchValue({
      username: 'test',
      email: 'test@email.com',
      password: 'password'
    });

    expect(component.signUpForm.valid).toBe(true);

    await component.onSubmit();
    expect(routerSpy).toBeCalledWith(['/login']);
  });
});
