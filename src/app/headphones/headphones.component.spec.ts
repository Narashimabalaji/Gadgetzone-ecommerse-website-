/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeadphonesComponent } from './headphones.component';

describe('HeadphonesComponent', () => {
  let component: HeadphonesComponent;
  let fixture: ComponentFixture<HeadphonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadphonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
