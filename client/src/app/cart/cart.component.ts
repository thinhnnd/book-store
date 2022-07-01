import { Component, OnInit } from '@angular/core';
import { CartItem } from '../book-list/book.interface';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartList: CartItem[] = [];
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}

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
}
