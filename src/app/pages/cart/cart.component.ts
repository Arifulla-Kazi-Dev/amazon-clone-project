import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
    selector: 'app-cart',
    imports: [CommonModule, FormsModule],
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {} // Inject Router here

  ngOnInit(): void {
    // Subscribe to cart items changes
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.updateTotal();
    });
  }

  // Method to remove item from cart
  removeFromCart(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  // Method to clear the cart
  clearCart(): void {
    this.cartService.clearCart();
  }

  // Update the total amount whenever cart items change
  private updateTotal(): void {
    this.total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  // Handle "Proceed to Buy" action
  onProceedToBuy() {
    // Navigate to the checkout or payment page
    this.router.navigate(['/payment']);  // Replace '/payment' with your intended path if different
  }
}
