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
export class CartService implements OnInit {
  private authUrls = environment.apiUrl + '/cart';
  public cartList: CartItem[] = [];
  private path = '/auth';
  public token: string | null = null;
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: User = { email: '', password: '' };
  constructor(private http: HttpClient, public router: Router) {}
  ngOnInit(): void {
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

  getCartListFromLocalSorage() {
    let cart = localStorage.getItem('cartList');
    if (!cart) this.cartList = [];
    else this.cartList = JSON.parse(cart) || [];
  }
}
