import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.services';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-home-kitchen',
  imports: [CommonModule, RouterLink, ProductCardComponent],
  templateUrl: './home-kitchen.component.html',
  styleUrl: './home-kitchen.component.css'
})
export class HomeKitchenComponent {
  readonly title = 'Home & Kitchen';
  readonly description = 'Make daily routines simpler with practical, beautifully designed home upgrades.';
  readonly products: Product[];

  constructor(productService: ProductService, private cartService: CartService) {
    this.products = productService.getProductsByCategory('HomeKitchen');
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
