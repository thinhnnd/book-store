import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {}
}
