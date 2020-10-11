import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingStudentTestComponent } from './upcoming-student-test.component';

describe('UpcomingStudentTestComponent', () => {
  let component: UpcomingStudentTestComponent;
  let fixture: ComponentFixture<UpcomingStudentTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingStudentTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingStudentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
