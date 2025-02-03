import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.services'; // Ensure correct file name
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { CartService } from '../../services/cart.service';


@Component({
    selector: 'app-HomeKitchen',
    imports: [CommonModule, FormsModule, ProductCardComponent],
    templateUrl: './home-kitchen.component.html',
    styleUrl: './home-kitchen.component.css' // Changed to styleUrls
})
export class HomeKitchenComponent implements OnInit {
  HomeKitchenProducts: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadHomeKitchenProducts();
  }

  private loadHomeKitchenProducts(): void {
    this.HomeKitchenProducts = this.productService['getProductsByCategory']('HomeKitchen');
    console.log(this.HomeKitchenProducts); // Add this to verify it returns products
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product); 
    console.log("Product added to cart:", product);
  }

}
