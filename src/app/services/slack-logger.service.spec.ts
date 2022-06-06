import { TestBed } from '@angular/core/testing';

import { SlackLoggerService } from './slack-logger.service';

describe('SlackLoggerService', () => {
  let service: SlackLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlackLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
