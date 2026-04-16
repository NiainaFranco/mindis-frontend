import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibonColorEditDialog } from './ribon-color-edit-dialog';

describe('RibonColorEditDialog', () => {
  let component: RibonColorEditDialog;
  let fixture: ComponentFixture<RibonColorEditDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RibonColorEditDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(RibonColorEditDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
