import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientsComponent } from './view-patients.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ViewPatientsComponent', () => {
  let component: ViewPatientsComponent;
  let fixture: ComponentFixture<ViewPatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPatientsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
