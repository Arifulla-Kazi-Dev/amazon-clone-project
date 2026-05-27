import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly products: Product[] = [
    { id: 1, name: 'Boult Audio UFO', price: 1299, previousPrice: 2499, rating: 4.5, reviewCount: 248, badge: 'Best seller', description: 'Wireless gaming earbuds with low-latency BoomX drivers.', quantity: 1, category: 'Electronics', image: '/assets/products/boult-audio.jpg' },
    { id: 2, name: 'Asus VivoBook 15 Pro OLED', price: 64990, previousPrice: 79990, rating: 4.6, reviewCount: 82, badge: 'New', description: 'Vivid OLED laptop built for creative work and streaming.', quantity: 1, category: 'Electronics', image: '/assets/products/asus-vivobook.jpg' },
    { id: 3, name: 'Sony WH-1000XM4', price: 19990, previousPrice: 29990, rating: 4.8, reviewCount: 1120, badge: 'Top rated', description: 'Wireless noise-cancelling headphones with rich audio.', quantity: 1, category: 'Electronics', image: '/assets/products/sony-headphones.jpg' },
    { id: 4, name: 'Apple iPhone 14', price: 54900, previousPrice: 69900, rating: 4.7, reviewCount: 940, description: 'A15 Bionic performance, dual-camera system, and 5G.', quantity: 1, category: 'Electronics', image: '/assets/products/apple-iphone-14.jpg' },
    { id: 5, name: 'Samsung 4K UHD TV', price: 32990, previousPrice: 49990, rating: 4.4, reviewCount: 390, badge: 'Limited deal', description: 'Crystal 4K display with intuitive smart entertainment.', quantity: 1, category: 'Electronics', image: '/assets/products/samsung-tv.jpg' },
    { id: 6, name: 'Coffee Maker', price: 2499, previousPrice: 3499, rating: 4.3, reviewCount: 168, description: 'Compact drip brewer for effortless morning coffee.', quantity: 1, category: 'HomeKitchen', image: '/assets/products/coffee-maker.jpg' },
    { id: 7, name: 'Instant Pot Duo', price: 8999, previousPrice: 11999, rating: 4.7, reviewCount: 723, badge: 'Popular', description: 'Seven-in-one pressure cooker with quick programs.', quantity: 1, category: 'HomeKitchen', image: '/assets/products/instant-pot-duo.jpg' },
    { id: 8, name: 'Dyson V11 Vacuum Cleaner', price: 44990, previousPrice: 56990, rating: 4.6, reviewCount: 304, description: 'Cord-free cleaning power with up to 60 minutes runtime.', quantity: 1, category: 'HomeKitchen', image: '/assets/products/dyson-v11.jpg' },
    { id: 9, name: 'Ninja Professional Blender', price: 6999, previousPrice: 8999, rating: 4.5, reviewCount: 189, description: 'High-performance blender with an 1100-watt motor.', quantity: 1, category: 'HomeKitchen', image: '/assets/products/ninja-blender.jpg' },
    { id: 10, name: 'Digital Air Fryer', price: 8999, previousPrice: 12999, rating: 4.4, reviewCount: 227, badge: 'Deal', description: 'Six-quart air fryer with eight one-touch presets.', quantity: 1, category: 'HomeKitchen', image: '/assets/products/air-fryer.jpg' },
    { id: 11, name: 'Philips Air Purifier', price: 13999, previousPrice: 17999, rating: 4.6, reviewCount: 143, description: 'HEPA filtration with real-time air quality feedback.', quantity: 1, category: 'HomeKitchen', image: '/assets/products/philips-air-purifier.jpg' },
    { id: 12, name: "Levi's Men's Jeans", price: 2999, previousPrice: 4499, rating: 4.4, reviewCount: 402, description: 'Everyday classic-fit denim made for lasting comfort.', quantity: 1, category: 'Fashion', image: '/assets/products/levis-jeans.jpg' },
    { id: 13, name: 'Ray-Ban Aviator Sunglasses', price: 8990, previousPrice: 12990, rating: 4.7, reviewCount: 190, description: 'Timeless aviator frames with premium sun protection.', quantity: 1, category: 'Fashion', image: '/assets/products/ray-ban-aviator.jpg' },
    { id: 14, name: 'Nike Air Max Shoes', price: 7995, previousPrice: 11995, rating: 4.8, reviewCount: 557, badge: 'Trending', description: 'Cushioned sneakers engineered for all-day movement.', quantity: 1, category: 'Fashion', image: '/assets/products/nike-air-max.jpg' },
    { id: 15, name: 'Adidas Running Shoes', price: 5999, previousPrice: 8999, rating: 4.5, reviewCount: 210, description: 'Lightweight running shoes for daily miles and errands.', quantity: 1, category: 'Fashion', image: '/assets/products/adidas-running-shoes.jpg' },
    { id: 16, name: 'Fossil Chronograph Watch', price: 12495, previousPrice: 15995, rating: 4.6, reviewCount: 94, description: 'Refined chronograph watch with a bold black dial.', quantity: 1, category: 'Fashion', image: '/assets/products/fossil-watch.jpg' },
    { id: 17, name: 'Tommy Hilfiger Wallet', price: 2499, previousPrice: 3999, rating: 4.3, reviewCount: 116, description: 'Slim leather wallet with built-in RFID protection.', quantity: 1, category: 'Fashion', image: '/assets/products/tommy-wallet.jpg' }
  ];

  getProductsByCategory(category: string): Product[] {
    return this.copyProducts(this.products.filter(product => product.category === category));
  }

  searchProducts(query: string, category = ''): Product[] {
    const normalizedQuery = query.trim().toLowerCase();
    return this.copyProducts(this.products.filter(product => {
      const inCategory = !category || product.category === category;
      const content = `${product.name} ${product.description} ${product.category}`.toLowerCase();
      return inCategory && (!normalizedQuery || content.includes(normalizedQuery));
    }));
  }

  getProductById(id: number): Product | undefined {
    const product = this.products.find(item => item.id === id);
    return product ? { ...product } : undefined;
  }

  getProducts(): Product[] {
    return this.copyProducts(this.products);
  }

  private copyProducts(products: Product[]): Product[] {
    return products.map(product => ({ ...product }));
  }
}
