import { TestBed } from '@angular/core/testing';
import { CreateRibonColorSetService } from './create-ribon-color-set-service';

describe('CreateRibonColorSetService', () => {
  let service: CreateRibonColorSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateRibonColorSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
