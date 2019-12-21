import { TestBed } from '@angular/core/testing';

import { ListUserserviceService } from './list-userservice.service';

describe('ListUserserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListUserserviceService = TestBed.get(ListUserserviceService);
    expect(service).toBeTruthy();
  });
});
