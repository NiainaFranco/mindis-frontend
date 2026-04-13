import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTableSearchInput } from './app-table-search-input';

describe('AppTableSearchInput', () => {
  let component: AppTableSearchInput;
  let fixture: ComponentFixture<AppTableSearchInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTableSearchInput],
    }).compileComponents();

    fixture = TestBed.createComponent(AppTableSearchInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
