import { TestBed } from '@angular/core/testing';

import { StudentcardService } from './studentcard.service';

describe('StudentcardService', () => {
  let service: StudentcardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentcardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
