import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';  // Adjust the import path

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartCount: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to cart items observable
    this.cartService.cartItems$.subscribe(cartItems => {
      this.cartCount = cartItems.length;  // Update cart count dynamically
    });
  }

  // Method to navigate to the login page
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  // Method to navigate to the cart page
  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }
}
