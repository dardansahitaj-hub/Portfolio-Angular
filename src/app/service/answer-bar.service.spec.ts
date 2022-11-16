import { TestBed } from '@angular/core/testing';

import { AnswerBarService } from './answer-bar.service';

describe('AnswerBarService', () => {
  let service: AnswerBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
