import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductRibonColorPresentationPage } from './edit-product-ribon-color-presentation-page';

describe('EditProductRibonColorPresentationPage', () => {
  let component: EditProductRibonColorPresentationPage;
  let fixture: ComponentFixture<EditProductRibonColorPresentationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProductRibonColorPresentationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditProductRibonColorPresentationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
