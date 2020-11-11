import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalLocationsComponent } from './hospital-locations.component';

describe('HospitalLocationsComponent', () => {
  let component: HospitalLocationsComponent;
  let fixture: ComponentFixture<HospitalLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
