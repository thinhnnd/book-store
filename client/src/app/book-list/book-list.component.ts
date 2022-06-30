import { DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './book.interface';
import { BookService } from './book.service';
import { BOOKS } from './mocks';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { Pagination } from '../../models/pagination';

@Component({
  template: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService, DecimalPipe],
})
export class BookListComponent implements OnInit {
  paginationData$: Observable<Pagination<IBook[]>>;

  ngOnInit(): void {
    // this.getBooks();
  }
  public books: IBook[] = BOOKS;
  public paginationData: Pagination<IBook[]>;

  books$: Observable<IBook[]>;
  total$: Observable<number>;

  // @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> =
  //   new QueryList<NgbdSortableHeader>();

  constructor(public bookService: BookService) {
    this.paginationData$ = bookService.paginationData$;
    this.paginationData = {
      total: 0,
      data: [],
    };

    this.books$ = bookService.books$;
    this.total$ = bookService.total$;
  }

  // getBooks(): void {
  //   this.bookService.getBooks().subscribe((paginationData) => {
  //     this.paginationData = paginationData;
  //   });
  // }
}
