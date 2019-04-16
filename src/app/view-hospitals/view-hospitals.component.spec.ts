import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHospitalsComponent } from './view-hospitals.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('ViewHospitalsComponent', () => {
  let component: ViewHospitalsComponent;
  let fixture: ComponentFixture<ViewHospitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHospitalsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
