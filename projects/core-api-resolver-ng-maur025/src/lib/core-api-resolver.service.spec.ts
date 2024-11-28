import { TestBed } from '@angular/core/testing';

import { CoreApiResolverService } from './core-api-resolver.service';

describe('CoreApiResolverService', () => {
  let service: CoreApiResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreApiResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
