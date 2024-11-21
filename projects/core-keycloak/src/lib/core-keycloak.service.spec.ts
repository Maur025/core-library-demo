import { TestBed } from '@angular/core/testing';

import { CoreKeycloakService } from './core-keycloak.service';

describe('CoreKeycloakService', () => {
  let service: CoreKeycloakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreKeycloakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
