import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibonColorSetLandingPage } from './ribon-color-set-landing-page';

describe('RibonColorSetLandingPage', () => {
  let component: RibonColorSetLandingPage;
  let fixture: ComponentFixture<RibonColorSetLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RibonColorSetLandingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(RibonColorSetLandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
