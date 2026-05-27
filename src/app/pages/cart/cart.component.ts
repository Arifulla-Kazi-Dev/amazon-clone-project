import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  subtotal = 0;
  itemCount = 0;

  constructor(private cartService: CartService, private router: Router) {}

  get delivery(): number {
    return this.subtotal >= 999 ? 0 : 99;
  }

  get estimatedTax(): number {
    return this.subtotal * 0.18;
  }

  get total(): number {
    return this.subtotal + this.delivery + this.estimatedTax;
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.subtotal = this.cartService.getTotal();
      this.itemCount = this.cartService.getItemCount();
    });
  }

  increase(item: Product): void {
    this.cartService.updateQuantity(item.id, item.quantity + 1);
  }

  decrease(item: Product): void {
    this.cartService.updateQuantity(item.id, item.quantity - 1);
  }

  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  onProceedToBuy(): void {
    this.router.navigate(['/checkout']);
  }

  showFallbackImage(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.src = '/assets/product-placeholder.svg';
  }
}
