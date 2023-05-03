/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TelivisonComponent } from './telivison.component';

describe('TelivisonComponent', () => {
  let component: TelivisonComponent;
  let fixture: ComponentFixture<TelivisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelivisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelivisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
