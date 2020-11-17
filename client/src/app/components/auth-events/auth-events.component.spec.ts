import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEventsComponent } from './auth-events.component';

describe('AuthEventsComponent', () => {
  let component: AuthEventsComponent;
  let fixture: ComponentFixture<AuthEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
