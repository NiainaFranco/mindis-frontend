import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibonColorSetCard } from './ribon-color-set-card';

describe('RibonColorSetCard', () => {
  let component: RibonColorSetCard;
  let fixture: ComponentFixture<RibonColorSetCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RibonColorSetCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RibonColorSetCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
