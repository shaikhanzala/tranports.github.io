import { TestBed } from '@angular/core/testing';

import { HanzalaService } from './hanzala.service';

describe('HanzalaService', () => {
  let service: HanzalaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HanzalaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
