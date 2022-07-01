import { Component, OnInit } from '@angular/core';
import { CartItem } from '../book-list/book.interface';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartList: CartItem[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.getCartListFromLocalSorage();
    this.cartList = this.cartService.cartList;
    console.log('this cartList', this.cartList);
    if (this.cartList && this.cartList.length)
      this.totalPrice = this.countTotalPrice();
  }

  countTotalPrice() {
    let total = 0;
    this.cartList.forEach((item) => {
      total = total + item.item.price * item.quantity;
    });
    return total;
  }

  buy() {
    this.cartService.buy().subscribe((res: any) => {
      localStorage.removeItem('access_token');
      alert('Buy successfully');
      this.router.navigate(['/']);
    });
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
