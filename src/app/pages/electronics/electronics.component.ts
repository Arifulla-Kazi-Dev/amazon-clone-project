// src/app/components/electronics/electronics.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.services';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";

@Component({
    selector: 'app-electronics',
    imports: [CommonModule, FormsModule, ProductCardComponent],
    templateUrl: './electronics.component.html',
    styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  electronicsProducts: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadElectronicsProducts();
  }

  private loadElectronicsProducts(): void {
    this.electronicsProducts = this.productService.getProductsByCategory('Electronics');
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product); 
    console.log("Product added to cart:", product);
  }
}
