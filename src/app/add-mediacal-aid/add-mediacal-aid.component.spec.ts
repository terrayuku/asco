import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMediacalAidComponent } from './add-mediacal-aid.component';

describe('AddMediacalAidComponent', () => {
  let component: AddMediacalAidComponent;
  let fixture: ComponentFixture<AddMediacalAidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMediacalAidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMediacalAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
