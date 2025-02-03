import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { CartService } from '../../services/cart.service'; // Import CartService
import { Product } from '../../models/product.model'; // Import Product model

@Component({
    selector: 'app-home',
    imports: [CommonModule, FormsModule, ProductCardComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories = [
    { name: 'Electronics', route: '/electronics' },
    { name: 'Fashion', route: '/fashion' },
    { name: 'Kitchen', route: '/home-kitchen' }
  ];

  featuredProducts: Product[] = [
    { id: 1, name: 'Boult Audio UFO', price: 100, description: 'Wireless Gaming Earbuds with 13mm BoomX Drivers', quantity: 1, category: 'Electronics', image: 'https://i.ibb.co/qBsC5Px/Boult.jpg' },
    { id: 2, name: 'Asus VivoBook 15 Pro OLED', price: 150, description: 'Lighting up your creativity.', quantity: 1, category: 'Electronics', image: 'https://i.ibb.co/Jzy96SY/Asus.jpg' },
    { id: 3, name: 'Coffee Maker', price: 79, description: 'AGARO Primo Drip Coffee Maker, Brew & Drip Coffee Maker.', quantity: 1, category: 'Home & Kitchen', image: 'https://i.ibb.co/YW1PB8J/Coffee.jpg' },
    // Add more products and assign appropriate categories
  ];

  constructor(private cartService: CartService, private router: Router) {} // Inject CartService and Router

  ngOnInit(): void {}

  // Add product to cart
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  onCategoryClick(categoryRoute: string): void {
    console.log(`Navigating to category: ${categoryRoute}`);
    this.router.navigate([categoryRoute]); // Navigate to the route defined in categories
  }

  formatCategoryName(categoryName: string): string {
    return categoryName.toLowerCase().replace(/ /g, '');
  }
}
