import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingTestComponent } from './upcoming-test.component';

describe('UpcomingTestComponent', () => {
  let component: UpcomingTestComponent;
  let fixture: ComponentFixture<UpcomingTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
