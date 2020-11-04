import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSubmitTestComponent } from './student-submit-test.component';

describe('StudentSubmitTestComponent', () => {
  let component: StudentSubmitTestComponent;
  let fixture: ComponentFixture<StudentSubmitTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSubmitTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSubmitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
