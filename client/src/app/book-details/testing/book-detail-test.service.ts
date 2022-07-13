import { Observable } from 'rxjs';
import { IBook } from 'src/app/book-list/book.interface';
import { BookDetailService } from '../book-detail.service';
import { BOOKS } from '../../book-list/mocks';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BookDetailTestService extends BookDetailService {
  public override getABook(id: string): Observable<IBook> {
    return new Observable((subscribe) => subscribe.next(BOOKS[0]));
  }
}
