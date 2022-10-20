import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerAppointedComponent } from './volunteer-appointed.component';

describe('VolunteerAppointedComponent', () => {
  let component: VolunteerAppointedComponent;
  let fixture: ComponentFixture<VolunteerAppointedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteerAppointedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerAppointedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
