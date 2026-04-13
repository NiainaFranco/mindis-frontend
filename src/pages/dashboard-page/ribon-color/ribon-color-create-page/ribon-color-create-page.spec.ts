import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibonColorCreatePage } from './ribon-color-create-page';

describe('RibonColorCreatePage', () => {
  let component: RibonColorCreatePage;
  let fixture: ComponentFixture<RibonColorCreatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RibonColorCreatePage],
    }).compileComponents();

    fixture = TestBed.createComponent(RibonColorCreatePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
