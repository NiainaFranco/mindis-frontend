import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRibonColorSetPage } from './edit-ribon-color-set-page';

describe('EditRibonColorSetPage', () => {
  let component: EditRibonColorSetPage;
  let fixture: ComponentFixture<EditRibonColorSetPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRibonColorSetPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditRibonColorSetPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
