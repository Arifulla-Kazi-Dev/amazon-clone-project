import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.services'; // Ensure correct file name
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-fashion',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.css' // Changed to styleUrls
})
export class FashionComponent implements OnInit {
  fashionProducts: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.loadFashionProducts();
  }

  private loadFashionProducts(): void {
    this.fashionProducts = this.productService['getProductsByCategory']('Fashion');
    console.log(this.fashionProducts); // Add this to verify it returns products
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product); 
    console.log("Product added to cart:", product);
  }
}
