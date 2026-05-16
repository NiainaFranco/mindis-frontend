import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductRibonColorPresentationPage } from './create-product-ribon-color-presentation-page';

describe('CreateProductRibonColorPresentationPage', () => {
  let component: CreateProductRibonColorPresentationPage;
  let fixture: ComponentFixture<CreateProductRibonColorPresentationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProductRibonColorPresentationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateProductRibonColorPresentationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
