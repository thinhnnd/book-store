import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBook } from '../../../../api/dist/books/models/book.interface';
import { BOOKS } from '../book-list/mocks';
import { BookDetailService } from './book-detail.service';
import { of, throwError } from 'rxjs';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let bookDetailService: BookDetailService;

beforeEach(() => {
  // TODO: spy on other methods too
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  bookDetailService = new BookDetailService(httpClientSpy);
});

it('should return expected book (HttpClient called once)', (done: DoneFn) => {
  const expectedBook: IBook = BOOKS[0];

  httpClientSpy.get.and.returnValue(of(expectedBook));

  bookDetailService.getABook('1').subscribe({
    next: (book) => {
      expect(book)
        .withContext('expected Book')
        .toEqual(jasmine.objectContaining(expectedBook));
      done();
    },
    error: done.fail,
  });
  expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
});

it('should return an error ', (done: DoneFn) => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404,
    statusText: 'Not Found',
  });

  httpClientSpy.get.and.throwError(errorResponse);

  spyOn(bookDetailService, 'getABook').and.callFake((id: string) => {
    return throwError(errorResponse);
  });

  bookDetailService.getABook('x').subscribe({
    next: (book) => done.fail('expected an error, not book'),
    error: (error) => {
      console.log('haha a', error);
      expect(error.error).toContain('test 404 error');
      done();
    },
  });
});
