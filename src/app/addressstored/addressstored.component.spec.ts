/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddressstoredComponent } from './addressstored.component';

describe('AddressstoredComponent', () => {
  let component: AddressstoredComponent;
  let fixture: ComponentFixture<AddressstoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressstoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressstoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
