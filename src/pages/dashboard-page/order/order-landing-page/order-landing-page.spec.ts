import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLandingPage } from './order-landing-page';

describe('OrderLandingPage', () => {
  let component: OrderLandingPage;
  let fixture: ComponentFixture<OrderLandingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderLandingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderLandingPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
