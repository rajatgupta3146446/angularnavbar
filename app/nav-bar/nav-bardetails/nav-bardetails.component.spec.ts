import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBardetailsComponent } from './nav-bardetails.component';

describe('NavBardetailsComponent', () => {
  let component: NavBardetailsComponent;
  let fixture: ComponentFixture<NavBardetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBardetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
