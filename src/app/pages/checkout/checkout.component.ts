import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent implements OnInit {
  cartItems: Product[] = [];
  subtotal = 0;
  deliveryMethod = 'standard';
  shipping = {
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: ''
  };

  constructor(private cartService: CartService, private router: Router) {}

  get deliveryFee(): number {
    if (this.deliveryMethod === 'express') {
      return 199;
    }
    return this.subtotal >= 999 ? 0 : 99;
  }

  get tax(): number {
    return this.subtotal * 0.18;
  }

  get total(): number {
    return this.subtotal + this.deliveryFee + this.tax;
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.subtotal = this.cartService.getTotal();
    });
  }

  continueToPayment(): void {
    this.router.navigate(['/payment']);
  }

  showFallbackImage(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.src = '/assets/product-placeholder.svg';
  }
}
