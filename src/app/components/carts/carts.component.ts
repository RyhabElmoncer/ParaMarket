import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Subscribe to cart updates
    this.cartSubscription = this.cartService.cartItems$.subscribe(cartItems => {
      this.cartItems = cartItems;
      console.log('Updated cart items:', this.cartItems);
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe(); // Unsubscribe on destroy to avoid memory leaks
    }
  }

  removeFromCart(productId: number): void {
    console.log('Removing product with id:', productId);  // Debugging log
    this.cartService.removeFromCart(productId);
  }
  

  // Method to clear the entire cart
  clearCart(): void {
    this.cartService.clearCart();
  }
}
