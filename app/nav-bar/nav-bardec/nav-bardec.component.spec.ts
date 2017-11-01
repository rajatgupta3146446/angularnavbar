import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBardecComponent } from './nav-bardec.component';

describe('NavBardecComponent', () => {
  let component: NavBardecComponent;
  let fixture: ComponentFixture<NavBardecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBardecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBardecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
