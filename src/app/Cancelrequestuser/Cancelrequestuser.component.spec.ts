/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CancelrequestuserComponent } from './Cancelrequestuser.component';

describe('CancelrequestuserComponent', () => {
  let component: CancelrequestuserComponent;
  let fixture: ComponentFixture<CancelrequestuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelrequestuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelrequestuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
