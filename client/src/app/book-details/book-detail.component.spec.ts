import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { BookDetailComponent } from './book-detail.component';
import { BookDetailService } from './book-detail.service';
import { CartService } from '../cart/cart.service';
import { BookDetailTestService } from './testing/book-detail-test.service';
import { Observable } from 'rxjs';
import { BOOKS } from '../book-list/mocks';

const fakeActivatedRoute = {
  snapshot: { paramMap: convertToParamMap({ _id: '1' }) },
} as ActivatedRoute;

// spy on book detail service
const bookDetailServiceSpy = jasmine.createSpyObj<BookDetailService>(
  'BookDetailService',
  ['getABook']
);

const getABookSpy = bookDetailServiceSpy.getABook.and.returnValue(
  new Observable((s) => s.next(BOOKS[0]))
);

let cartService: jasmine.SpyObj<CartService>;

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailComponent],
      providers: [
        FormBuilder,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: BookDetailService, useValue: bookDetailServiceSpy },
        { provide: CartService, useValue: cartService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render h5 with content "Description"', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;

    expect(
      nativeElement.querySelector('.content #detail-desc')?.textContent
    ).toEqual('Description');
  });

  it('should get book object', () => {
    expect(component.book).toEqual(jasmine.objectContaining(BOOKS[0]));
  });

  it('should render book title', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;

    expect(
      nativeElement.querySelector('#book-detail #title')?.textContent
    ).toEqual(BOOKS[0].title);
  });

  it('should render book img', () => {
    const nativeElement: HTMLElement = fixture.nativeElement;

    expect(
      nativeElement.querySelector<HTMLElementTagNameMap['img']>(
        '#book-detail img'
      )?.src
    ).toEqual(BOOKS[0].image);
  });
});
