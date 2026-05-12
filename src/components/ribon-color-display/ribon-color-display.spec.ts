import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibonColorDisplay } from './ribon-color-display';

describe('RibonColorDisplay', () => {
  let component: RibonColorDisplay;
  let fixture: ComponentFixture<RibonColorDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RibonColorDisplay],
    }).compileComponents();

    fixture = TestBed.createComponent(RibonColorDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
