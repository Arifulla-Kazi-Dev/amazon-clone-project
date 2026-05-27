import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly storageKey = 'novaCartItemsInrV1';
  private cartItems: Product[] = [];
  private cartItemsSubject = new BehaviorSubject<Product[]>(this.cartItems);

  cartItems$ = this.cartItemsSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.cartItems = this.loadCartItems();
    this.updateCart();
  }

  addToCart(product: Product): void {
    this.addQuantity(product, 1);
  }

  addQuantity(product: Product, quantity: number): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.cartItems.push({ ...product, quantity });
    }
    this.updateCart();
  }

  updateQuantity(productId: number, quantity: number): void {
    if (quantity < 1) {
      this.removeFromCart(productId);
      return;
    }

    const product = this.cartItems.find(item => item.id === productId);
    if (product) {
      product.quantity = quantity;
      this.updateCart();
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getItemCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  hasProduct(productId: number): boolean {
    return this.cartItems.some(item => item.id === productId);
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.updateCart();
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  private loadCartItems(): Product[] {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const items = localStorage.getItem(this.storageKey);
        const parsedItems: unknown = items ? JSON.parse(items) : [];
        return Array.isArray(parsedItems) ? parsedItems as Product[] : [];
      } catch {
        localStorage.removeItem(this.storageKey);
      }
    }
    return [];
  }

  private updateCart(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('cartItems');
      localStorage.setItem(this.storageKey, JSON.stringify(this.cartItems));
    }
    this.cartItemsSubject.next([...this.cartItems]);
  }
}
