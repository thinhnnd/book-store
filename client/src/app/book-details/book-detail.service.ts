/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable, PipeTransform, OnInit } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import {
  catchError,
  debounceTime,
  delay,
  switchMap,
  tap,
} from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../book-list/book.interface';

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
}

@Injectable({ providedIn: 'root' })
export class BookDetailService {
  private booksUrl = environment.apiUrl + '/books';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

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

  public getABook(id: string): Observable<IBook> {
    return this.httpClient
      .get<IBook>(`${this.booksUrl}/${id}`)
      .pipe(catchError(this.handleError<IBook>('get a book')));
  }

  private log(message: string) {
    console.log(`Book Detail: ${message}`);
  }
}
