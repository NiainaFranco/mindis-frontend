import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneProductLandingPage } from './show-one-product-landing-page';

describe('ShowOneProductLandingPage', () => {
  let component: ShowOneProductLandingPage;
  let fixture: ComponentFixture<ShowOneProductLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowOneProductLandingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowOneProductLandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
