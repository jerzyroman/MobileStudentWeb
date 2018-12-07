import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenceCheckComponent } from './presence-check.component';

describe('PresenceCheckComponent', () => {
  let component: PresenceCheckComponent;
  let fixture: ComponentFixture<PresenceCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenceCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenceCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
