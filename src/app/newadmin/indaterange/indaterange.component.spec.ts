import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndaterangeComponent } from './indaterange.component';

describe('IndaterangeComponent', () => {
  let component: IndaterangeComponent;
  let fixture: ComponentFixture<IndaterangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndaterangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndaterangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
