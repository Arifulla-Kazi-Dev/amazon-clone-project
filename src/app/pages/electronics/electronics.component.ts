import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.services';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-electronics',
  imports: [CommonModule, RouterLink, ProductCardComponent],
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent {
  readonly title = 'Electronics';
  readonly description = 'Upgrade your daily routine with connected devices and premium entertainment.';
  readonly products: Product[];

  constructor(productService: ProductService, private cartService: CartService) {
    this.products = productService.getProductsByCategory('Electronics');
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
