// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    // Electronics
    { id: 1, name: 'Boult Audio UFO', price: 100, description: 'Wireless Gaming Earbuds with 13mm BoomX Drivers', quantity: 1, category: 'Electronics', image:'https://i.ibb.co/qBsC5Px/Boult.jpg' },
    { id: 2, name: 'Asus VivoBook 15 Pro OLed', price: 150, description: 'Lighting up your creativity.', quantity: 1, category: 'Electronics', image: 'https://i.ibb.co/Jzy96SY/Asus.jpg' },
    { id: 3, name: 'Sony WH-1000XM4', price: 300, description: 'Industry Leading Noise Cancelling Overhead Headphones', quantity: 1, category: 'Electronics', image: 'https://i.ibb.co/PQjX9cJ/Sony.jpg' },
    { id: 4, name: 'Apple iPhone 14', price: 799, description: 'Latest model with A15 Bionic chip and 5G', quantity: 1, category: 'Electronics' , image: 'https://i.ibb.co/qpw1RxK/Apple-i-Phone-14.jpg'},
    { id: 5, name: 'Samsung 4K UHD TV', price: 450, description: 'Crystal Display with smart features', quantity: 1, category: 'Electronics', image: 'https://i.ibb.co/JjjmZTS/Samsung-4-K-UHD-TV.jpg' },
  
    // Home & Kitchen
    { id: 6, name: 'Coffee Maker', price: 79, description: 'AGARO Primo Drip Coffee Maker, Brew & Drip Coffee Maker.', quantity: 1, category: 'HomeKitchen', image: 'https://i.ibb.co/YW1PB8J/Coffee.jpg' },
    { id: 7, name: 'Instant Pot Duo', price: 89, description: '7-in-1 Electric Pressure Cooker with 14 One-Touch Programs', quantity: 1, category: 'HomeKitchen' , image: 'https://i.ibb.co/8mzXwZs/Instant-Pot-Duo.jpg'},
    { id: 8, name: 'Dyson V11 Vacuum Cleaner', price: 599, description: 'Cord-free vacuum with powerful suction and 60 minutes runtime', quantity: 1, category: 'HomeKitchen' , image: 'https://i.ibb.co/ggzMsrZ/Dyson-V11-Vacuum-Cleaner.jpg'},
    { id: 9, name: 'Ninja Professional Blender', price: 99, description: 'Powerful blender with 1100-Watt Motor', quantity: 1, category: 'HomeKitchen' , image: 'https://i.ibb.co/BC6VjLj/Ninja-Professional-Blender.jpg'},
    { id: 10, name: 'Air Fryer', price: 129, description: '6-Quart Digital Air Fryer with 8 Cooking Presets', quantity: 1, category: 'HomeKitchen', image: 'https://i.ibb.co/zmWHDZL/Air-Fryer.jpg' },
    { id: 11, name: 'Philips Air Purifier', price: 200, description: 'Advanced HEPA Filter with real-time air quality feedback', quantity: 1, category: 'HomeKitchen', image: 'https://i.ibb.co/2h7XVLv/Philips-Air-Purifier.webp' },
  
    // Fashion
    { id: 12, name: 'Levi’s Men’s Jeans', price: 60, description: 'Classic fit jeans with high durability', quantity: 1, category: 'Fashion', image: 'https://i.ibb.co/FXXc86s/Levis-Mens-Jeans.webp' },
    { id: 13, name: 'Ray-Ban Aviator Sunglasses', price: 150, description: 'Stylish and durable sunglasses', quantity: 1, category: 'Fashion', image: 'https://i.ibb.co/wKhfPsc/Ray-Ban-Aviator-Sunglasses.png' },
    { id: 14, name: 'Nike Air Max Shoes', price: 120, description: 'Comfortable and stylish sneakers', quantity: 1, category: 'Fashion', image: 'https://i.ibb.co/SrGX8M4/Nike-Air-Max-Shoes.webp' },
    { id: 15, name: 'Adidas Running Shoes', price: 100, description: 'Lightweight shoes for everyday wear', quantity: 1, category: 'Fashion' , image: 'https://i.ibb.co/rF45Y1J/Adidas-Running-Shoes.jpg'},
    { id: 16, name: 'Fossil Watch', price: 180, description: 'Chronograph Analog Black Dial', quantity: 1, category: 'Fashion', image: 'https://i.ibb.co/c2xb1zj/Fossil-Watch.jpg' },
    { id: 17, name: 'Tommy Hilfiger Wallet', price: 50, description: 'Leather wallet with RFID blocking', quantity: 1, category: 'Fashion', image: 'https://i.ibb.co/WKWYxxH/Tommy-Hilfiger-Wallet.jpg' }
  ];

  private cart: Product[] = []; // Array to store cart items

  constructor() {}

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  searchProducts(query: string): Product[] {
    return this.products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
  
  getProducts(): Product[] {
    return this.products;
  }

  addToCart(product: Product): void {
    const productInCart = this.cart.find(item => item.id === product.id);
    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getCartItems(): Product[] {
    return this.cart;
  }
}
