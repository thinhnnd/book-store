import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Country, IBook } from './book.interface';
import { BookService } from './book.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';

@Component({
  template: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: [BookService, DecimalPipe],
})
export class BookListComponent {
  books$: Observable<IBook[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> =
    new QueryList<NgbdSortableHeader>();

  constructor(public service: BookService) {
    this.books$ = service.books$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
