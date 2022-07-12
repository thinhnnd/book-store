import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { CartComponent } from './cart.component';
import { CartService } from './cart.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  let mockCartServiceStub: jasmine.SpyObj<CartService>;
  let mockRouter: any;

  mockRouter = jasmine.createSpyObj('Router', ['navigate']);

  mockCartServiceStub = jasmine.createSpyObj(['addToCart']);
  mockCartServiceStub = jasmine.createSpyObj(['removeAnItem']);
  mockCartServiceStub = jasmine.createSpyObj(['getCartListFromLocalSorage']);
  mockCartServiceStub = jasmine.createSpyObj(['buy']);
  mockCartServiceStub = jasmine.createSpyObj(['handleError']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [
        { provide: CartService, useValue: mockCartServiceStub },
        { provide: Router, useValue: mockRouter },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
