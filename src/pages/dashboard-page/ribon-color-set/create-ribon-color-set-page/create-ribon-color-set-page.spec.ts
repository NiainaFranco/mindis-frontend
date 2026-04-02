import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRibonColorSetPage } from './create-ribon-color-set-page';

describe('CreateRibonColorSetPage', () => {
  let component: CreateRibonColorSetPage;
  let fixture: ComponentFixture<CreateRibonColorSetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRibonColorSetPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRibonColorSetPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
