/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParticularProductviewService } from './particular-productview.service';

describe('Service: ParticularProductview', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticularProductviewService]
    });
  });

  it('should ...', inject([ParticularProductviewService], (service: ParticularProductviewService) => {
    expect(service).toBeTruthy();
  }));
});
