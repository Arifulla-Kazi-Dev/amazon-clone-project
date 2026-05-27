import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.services';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-fashion',
  imports: [CommonModule, RouterLink, ProductCardComponent],
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.css'
})
export class FashionComponent {
  readonly title = 'Fashion';
  readonly description = 'Wear-anywhere pieces selected for comfort, quality, and timeless style.';
  readonly products: Product[];

  constructor(productService: ProductService, private cartService: CartService) {
    this.products = productService.getProductsByCategory('Fashion');
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
