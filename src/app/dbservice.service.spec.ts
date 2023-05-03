/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DbserviceService } from './dbservice.service';

describe('Service: Dbservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbserviceService]
    });
  });

  it('should ...', inject([DbserviceService], (service: DbserviceService) => {
    expect(service).toBeTruthy();
  }));
});
