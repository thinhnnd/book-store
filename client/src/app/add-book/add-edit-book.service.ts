import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { IBook } from '../book-list/book.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AddEditBookService {
  private path = '/books';
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  create(book: IBook) {
    return this.http.post(`${environment.apiUrl}${this.path}`, book);
  }

  update(id: string, book: IBook) {
    return this.http.put(`${environment.apiUrl}${this.path}/${id}`, book);
  }
}
