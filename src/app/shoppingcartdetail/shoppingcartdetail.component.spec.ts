import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartdetailComponent } from './shoppingcartdetail.component';

describe('ShoppingcartdetailComponent', () => {
  let component: ShoppingcartdetailComponent;
  let fixture: ComponentFixture<ShoppingcartdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingcartdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingcartdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
