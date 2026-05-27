import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.services';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  readonly products: Product[];
  readonly categories = [
    { label: 'All departments', value: '' },
    { label: 'Electronics', value: 'Electronics' },
    { label: 'Fashion', value: 'Fashion' },
    { label: 'Home & Kitchen', value: 'HomeKitchen' }
  ];

  query = '';
  selectedCategory = '';
  maxPrice = 80000;
  sortOption = 'featured';

  constructor(productService: ProductService, private cartService: CartService) {
    this.products = productService.getProducts();
  }

  get filteredProducts(): Product[] {
    const search = this.query.trim().toLowerCase();
    const filtered = this.products.filter(product => {
      const text = `${product.name} ${product.description}`.toLowerCase();
      return (!search || text.includes(search)) &&
        (!this.selectedCategory || product.category === this.selectedCategory) &&
        product.price <= this.maxPrice;
    });

    return filtered.sort((first, second) => {
      if (this.sortOption === 'price-low') {
        return first.price - second.price;
      }
      if (this.sortOption === 'price-high') {
        return second.price - first.price;
      }
      if (this.sortOption === 'rating') {
        return (second.rating ?? 0) - (first.rating ?? 0);
      }
      return first.id - second.id;
    });
  }

  clearFilters(): void {
    this.query = '';
    this.selectedCategory = '';
    this.maxPrice = 80000;
    this.sortOption = 'featured';
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
