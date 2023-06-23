/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SingleproductviewService } from './singleproductview.service';

describe('Service: Singleproductview', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleproductviewService]
    });
  });

  it('should ...', inject([SingleproductviewService], (service: SingleproductviewService) => {
    expect(service).toBeTruthy();
  }));
});
