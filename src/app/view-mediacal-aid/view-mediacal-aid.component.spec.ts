import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMediacalAidComponent } from './view-mediacal-aid.component';

describe('ViewMediacalAidComponent', () => {
  let component: ViewMediacalAidComponent;
  let fixture: ComponentFixture<ViewMediacalAidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMediacalAidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMediacalAidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
