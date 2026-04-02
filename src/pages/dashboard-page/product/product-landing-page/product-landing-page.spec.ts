import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLandingPage } from './product-landing-page';

describe('ProductLandingPage', () => {
  let component: ProductLandingPage;
  let fixture: ComponentFixture<ProductLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLandingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductLandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
