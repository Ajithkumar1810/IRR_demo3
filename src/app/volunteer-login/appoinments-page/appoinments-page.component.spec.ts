import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentsPageComponent } from './appoinments-page.component';

describe('AppoinmentsPageComponent', () => {
  let component: AppoinmentsPageComponent;
  let fixture: ComponentFixture<AppoinmentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppoinmentsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppoinmentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
