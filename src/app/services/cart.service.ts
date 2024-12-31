import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'cartItems'; // Key for localStorage
  private cartItemsSubject = new BehaviorSubject<any[]>(this.getCartItems()); // BehaviorSubject to hold the cart items
  cartItems$ = this.cartItemsSubject.asObservable(); // Observable to subscribe to

  constructor() {}

  // Add a product to the cart
  addToCart(product: any): void {
    const currentCart = this.getCartItems();
    currentCart.push(product);
    this.saveCart(currentCart);
    this.cartItemsSubject.next(currentCart);  // Emit updated cart items
    console.log('Product added to cart:', product);
  }

  // Get all products in the cart
  getCartItems(): any[] {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  // Remove a product from the cart
  removeFromCart(productId: number): void {
    // Get the current cart items from localStorage
    const currentCart = this.getCartItems();
    console.log('Current Cart Before Removal:', currentCart);  // Log cart before removing the product
    
    // Check if the product exists in the cart
    const productToRemove = currentCart.find(item => item.id === productId);
    if (!productToRemove) {
      console.log('Product with id', productId, 'not found.');
      return; // Product not found, exit the method
    }
  
    // Filter out the product by its id
    const updatedCart = currentCart.filter(item => item.id !== productId);
    console.log('Updated Cart After Removal:', updatedCart);  // Log updated cart
    
    // Save the updated cart to localStorage and emit the changes
    this.saveCart(updatedCart);
    this.cartItemsSubject.next(updatedCart);  // Emit updated cart items
    console.log('Product Removed:', productToRemove);  // Log the removed product
  }
  

  // Clear the cart
  clearCart(): void {
    localStorage.removeItem(this.cartKey);
    this.cartItemsSubject.next([]);  // Emit an empty array
  }

  // Save cart to localStorage
  private saveCart(cart: any[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  // Get the cart count
  getCartCount(): number {
    return this.getCartItems().length;
  }
}
