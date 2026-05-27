import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.services';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  readonly categories = [
    {
      name: 'Electronics',
      route: '/electronics',
      image: '/assets/products/electronics.jpg',
      description: 'Smart tech and sound'
    },
    {
      name: 'Fashion',
      route: '/fashion',
      image: '/assets/products/fashion.jpg',
      description: 'Everyday style edits'
    },
    {
      name: 'Home & Kitchen',
      route: '/home-kitchen',
      image: '/assets/products/home-kitchen.jpg',
      description: 'Upgrade your space'
    }
  ];

  readonly featuredProducts: Product[];
  readonly dailyProducts: Product[];

  constructor(private cartService: CartService, productService: ProductService) {
    const products = productService.getProducts();
    this.featuredProducts = products.filter(product => [3, 7, 10, 14].includes(product.id));
    this.dailyProducts = products.filter(product => [1, 6, 12, 16].includes(product.id));
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  showFallbackImage(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.src = '/assets/product-placeholder.svg';
  }
}
