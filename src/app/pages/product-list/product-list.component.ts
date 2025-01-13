import { Component, OnInit, Inject } from '@angular/core';
import { ProductService } from '../../services/product.services';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { RouterModule } from '@angular/router'; // Import RouterModule for routerLink
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, ProductCardComponent], // Include RouterModule here
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    @Inject(ProductService) private productService: ProductService,
    @Inject(CartService) private cartService: CartService // Inject CartService
  ) {}

  ngOnInit(): void {
    // Fetch products from the ProductService
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product): void {
    // Add the selected product to the cart
    this.cartService.addToCart(product);
  }
}
