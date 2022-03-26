import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaterangedetailsComponent } from './daterangedetails.component';

describe('DaterangedetailsComponent', () => {
  let component: DaterangedetailsComponent;
  let fixture: ComponentFixture<DaterangedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaterangedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaterangedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
