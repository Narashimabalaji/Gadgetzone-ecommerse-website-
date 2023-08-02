/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductconfirmedService } from './productconfirmed.service';

describe('Service: Productconfirmed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductconfirmedService]
    });
  });

  it('should ...', inject([ProductconfirmedService], (service: ProductconfirmedService) => {
    expect(service).toBeTruthy();
  }));
});
