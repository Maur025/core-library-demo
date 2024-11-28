import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { handleKeycloakAuthGuard } from './handle-keycloak-auth.guard';

describe('handleKeycloakAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => handleKeycloakAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
