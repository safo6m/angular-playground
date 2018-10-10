import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsContainerComponent } from './meetings-container.component';

describe('MeetingsContainerComponent', () => {
  let component: MeetingsContainerComponent;
  let fixture: ComponentFixture<MeetingsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
