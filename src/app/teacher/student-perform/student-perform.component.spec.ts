import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPerformComponent } from './student-perform.component';

describe('StudentPerformComponent', () => {
  let component: StudentPerformComponent;
  let fixture: ComponentFixture<StudentPerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
