import { TestBed } from '@angular/core/testing';

import { RestApiStudentService } from './rest-api-student.service';

describe('RestApiStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestApiStudentService = TestBed.get(RestApiStudentService);
    expect(service).toBeTruthy();
  });
});
