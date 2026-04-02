import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderPage } from './edit-order-page';

describe('EditOrderPage', () => {
  let component: EditOrderPage;
  let fixture: ComponentFixture<EditOrderPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditOrderPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditOrderPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
