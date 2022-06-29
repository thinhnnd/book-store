import { DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './book.interface';
import { BookService } from './book.service';
import { BOOKS } from './mocks';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

@Component({
  template: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService, DecimalPipe],
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;
  total$: Observable<number>;

  ngOnInit(): void {
    this.getHeroes();
  }
  public books: IBook[] = BOOKS;
  // @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> =
  //   new QueryList<NgbdSortableHeader>();

  constructor(public bookService: BookService) {
    this.books$ = bookService.books$;
    this.total$ = bookService.total$;
  }

  getHeroes(): void {
    this.bookService.getBooks().subscribe((heroes) => (this.books = heroes));
  }
}
