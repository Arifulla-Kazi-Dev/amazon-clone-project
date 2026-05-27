import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.services';

@Component({
  selector: 'app-product-management',
  imports: [CommonModule],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent {
  readonly products: Product[];

  constructor(productService: ProductService) {
    this.products = productService.getProducts();
  }

  showFallbackImage(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.src = '/assets/product-placeholder.svg';
  }
}
