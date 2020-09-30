import { TestBed } from '@angular/core/testing';

import { TagmeComponentsService } from './tagme-components.service';

describe('TagmeComponentsService', () => {
  let service: TagmeComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagmeComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
