import { TestBed } from '@angular/core/testing';

import { GlycemieService } from './glycemie.service';

describe('GlycemieService', () => {
  let service: GlycemieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlycemieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
