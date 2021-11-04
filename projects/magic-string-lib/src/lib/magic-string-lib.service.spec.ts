import { TestBed } from '@angular/core/testing';

import { MagicStringLibService } from './magic-string-lib.service';

describe('MagicStringLibService', () => {
  let service: MagicStringLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MagicStringLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
