import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibonColorLandingPage } from './ribon-color-landing-page';

describe('RibonColorLandingPage', () => {
  let component: RibonColorLandingPage;
  let fixture: ComponentFixture<RibonColorLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RibonColorLandingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RibonColorLandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
