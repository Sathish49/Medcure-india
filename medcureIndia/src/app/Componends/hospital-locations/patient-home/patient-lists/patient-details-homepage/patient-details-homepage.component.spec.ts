import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDetailsHomepageComponent } from './patient-details-homepage.component';

describe('PatientDetailsHomepageComponent', () => {
  let component: PatientDetailsHomepageComponent;
  let fixture: ComponentFixture<PatientDetailsHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDetailsHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailsHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
