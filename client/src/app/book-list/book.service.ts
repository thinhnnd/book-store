/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IBook } from './book.interface';
import { BOOKS } from './mocks';
import { DecimalPipe } from '@angular/common';
import {
  catchError,
  debounceTime,
  delay,
  switchMap,
  tap,
} from 'rxjs/operators';
import { environment } from './../../environments/environment';

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
}

@Injectable({ providedIn: 'root' })
export class BookService {
  private booksUrl = environment.apiUrl + '/books';
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _books$ = new BehaviorSubject<IBook[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
  };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {
    // this._search$
    //   .pipe(
    //     tap(() => this._loading$.next(true)),
    //     debounceTime(200),
    //     switchMap(() => this._search()),
    //     delay(200),
    //     tap(() => this._loading$.next(false))
    //   )
    //   .subscribe((result) => {
    //     this._books$.next(result.books);
    //     this._total$.next(result.total);
    //   });
    // this._search$.next();
  }

  get books$() {
    return this._books$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }

  set page(page: number) {
    this._set({ page });
  }
  set pageSize(pageSize: number) {
    this._set({ pageSize });
  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
  }
  // set sortColumn(sortColumn: SortColumn) {
  //   this._set({ sortColumn });
  // }
  // set sortDirection(sortDirection: SortDirection) {
  //   this._set({ sortDirection });
  // }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  // private _search(): Observable<SearchResult> {
  //   const { sortColumn, sortDirection, pageSize, page, searchTerm } =
  //     this._state;

  //   // 1. sort
  //   let books = sort(BOOKS, sortColumn, sortDirection);

  //   // 2. filter
  //   books = books.filter((book) => matches(book, searchTerm, this.pipe));
  //   const total = books.length;

  //   // 3. paginate
  //   books = books.slice(
  //     (page - 1) * pageSize,
  //     (page - 1) * pageSize + pageSize
  //   );
  //   return of({ books, total });
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getBooks(): Observable<IBook[]> {
    return this.httpClient
      .get<IBook[]>(this.booksUrl)
      .pipe(catchError(this.handleError<IBook[]>('getHeroes', [])));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`HeroService: ${message}`);
  }
}
