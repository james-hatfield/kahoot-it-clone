import { SignupComponent } from './signup.component';
import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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

  it('should create user and navigate', () => {
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

    component.onSubmit();
    expect(routerSpy).toBeCalledWith(['/login']);
  });
});
