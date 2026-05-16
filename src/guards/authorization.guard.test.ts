import { AuthorizationGuard } from './authorization.guard';
import { TestBed } from '@angular/core/testing';
import { describe, expect, it, test, vi, beforeEach } from 'vitest';
import { AuthService } from '../service/auth-service.service';
import { MockAuthServiceBestCase } from '../app/tests/mocks/service/auth-service.service.mock';
import { GuardResult, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('Guard for authorization access to protected routes.', () => {
  let authorizationGuard: AuthorizationGuard;
  let authService: AuthService;
  beforeEach(async () => {
    const mockRouter = {
      createUrlTree: vi.fn(),
      navigate: vi.fn(),
    };
    const httpClientMock = {
      get: vi.fn(),
    };
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: MockAuthServiceBestCase,
        },
        {
          provide: Router,
          useValue: mockRouter,
        },
        {
          provide: HttpClient,
          useValue: httpClientMock,
        },
      ],
    }).compileComponents();
    authService = TestBed.inject(AuthService);
    authorizationGuard = TestBed.inject(AuthorizationGuard);
  });

  it('should return true if whoami function from auth service return user authentified object.', async () => {
    (authorizationGuard.canActivate() as Observable<GuardResult>).subscribe({
      next(result) {
        expect(result).toBe(true);
      },
    });
  });
});
