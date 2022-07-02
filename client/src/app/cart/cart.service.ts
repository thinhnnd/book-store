import { Injectable, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IAuth } from '../login/models/auth.model';
import { Observable, of, Subject, throwError } from 'rxjs';
import {
  catchError,
  debounceTime,
  delay,
  switchMap,
  tap,
  map,
} from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserReg, User } from '../auth/user.model';
import { CartItem, IBook } from '../book-list/book.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private authUrls = environment.apiUrl + '/cart';
  public cartList: CartItem[] = [];
  private path = '/auth';
  public token: string | null = null;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: User = { email: '', password: '' };
  constructor(private http: HttpClient, public router: Router) {
    this.getCartListFromLocalSorage();
  }

  addToCart(bookToAdd: IBook, numToAdd: number = 1) {
    this.getCartListFromLocalSorage();
    let book = this.cartList.find((book) => {
      return book.item._id === bookToAdd._id;
    });

    if (!book) {
      book = {
        item: bookToAdd,
        quantity: numToAdd,
      };
      console.log('found Book ', book);
      this.cartList.push(book);
    } else {
      book.quantity = book.quantity + numToAdd;
    }

    localStorage.setItem('cartList', JSON.stringify(this.cartList));

    alert(`Book ${book.item.title} is added`);
  }

  removeAnItem(_id?: string) {
    this.getCartListFromLocalSorage();
    let book = this.cartList.find((book) => {
      return book.item._id === _id;
    });

    if (!book) {
      console.log('found not found _id: ', _id);
      return;
    } else {
      this.cartList = this.cartList.filter((i) => i.item._id !== _id);
    }

    localStorage.setItem('cartList', JSON.stringify(this.cartList));
  }

  getCartListFromLocalSorage() {
    let cart = localStorage.getItem('cartList');
    if (!cart) this.cartList = [];
    else this.cartList = JSON.parse(cart) || [];
  }

  buy() {
    return this.http.post(`${environment.apiUrl}/orders/create`, this.cartList);
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(msg));
  }
}
