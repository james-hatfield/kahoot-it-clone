import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth-service/auth.service';
import {
  ConnectorService,
  BackendConnectorService
} from '@kahoot-it-clone/api/connector/backend-connector';
import { Router } from '@angular/router';
import { createSpyObj } from 'jest-createspyobj';
import { of } from 'rxjs';

describe('authService', () => {
  let service: AuthService;
  let router: Router;
  let connector: jest.Mocked<BackendConnectorService>;
  const users = [
    {
      id: '1',
      username: 'Lostpants',
      password: 'password',
      email: 'lostpants404@email.com'
    }
  ];
  beforeEach(() => {
    connector = createSpyObj(BackendConnectorService);
    connector.userList = of(users);

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {
          provide: ConnectorService,
          useValue: connector
        },
        {
          provide: Router,
          useValue: {
            navigate: jest.fn
          }
        }
      ]
    });
    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should login', async () => {
    expect(service.currentUser.value).toBe(undefined);

    await service.login('lostpants404@email.com', 'password');

    expect(service.currentUser.value).toBe(users[0]);
    expect(service.isAuthenticated()).toBe(true);
  });

  it('should logout', () => {
    const routerSpy = spyOn(router, 'navigate');
    service.currentUser.next(users[0]);

    expect(service.isAuthenticated()).toBe(true);
    service.logout();
    expect(service.currentUser.value).toBe(undefined);
    expect(service.isAuthenticated()).toBe(false);
    expect(routerSpy).toBeCalledWith(['/login']);
  });
});
