/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DatatranferService } from './Datatranfer.service';

describe('Service: Datatranfer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatatranferService]
    });
  });

  it('should ...', inject([DatatranferService], (service: DatatranferService) => {
    expect(service).toBeTruthy();
  }));
});
