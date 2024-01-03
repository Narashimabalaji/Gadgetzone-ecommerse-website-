import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedproductComponent } from './searchedproduct.component';

describe('SearchedproductComponent', () => {
  let component: SearchedproductComponent;
  let fixture: ComponentFixture<SearchedproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
