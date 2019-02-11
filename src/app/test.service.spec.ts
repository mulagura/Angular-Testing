import { TestBed, inject } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService]
    }); 
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));

  it('should able to add a and b values', inject([TestService], (service: TestService) => {
    expect(service.add(2,3)).toEqual(5);
  }));


});
