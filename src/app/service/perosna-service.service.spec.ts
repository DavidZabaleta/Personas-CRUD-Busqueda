import { TestBed } from '@angular/core/testing';

import { PerosnaServiceService } from './perosna-service.service';

describe('PerosnaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerosnaServiceService = TestBed.get(PerosnaServiceService);
    expect(service).toBeTruthy();
  });
});
