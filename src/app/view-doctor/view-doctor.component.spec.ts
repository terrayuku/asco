import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDoctorComponent } from './view-doctor.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ViewDoctorComponent', () => {
  let component: ViewDoctorComponent;
  let fixture: ComponentFixture<ViewDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDoctorComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
