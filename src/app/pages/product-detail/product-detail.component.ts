import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.services';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule, RouterLink, ProductCardComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  relatedProducts: Product[] = [];
  quantity = 1;
  addedMessage = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  get categoryLabel(): string {
    return this.product?.category === 'HomeKitchen' ? 'Home & Kitchen' : this.product?.category ?? '';
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.product = this.productService.getProductById(id);
      this.quantity = 1;
      this.relatedProducts = this.product
        ? this.productService.getProductsByCategory(this.product.category).filter(item => item.id !== id).slice(0, 4)
        : [];
    });
  }

  addToCart(product: Product): void {
    const wasAlreadyInCart = this.cartService.hasProduct(product.id);
    this.cartService.addQuantity(product, this.quantity);
    this.addedMessage = wasAlreadyInCart
      ? `Already in cart. Quantity increased by ${this.quantity}.`
      : `${this.quantity} item${this.quantity > 1 ? 's' : ''} added to your cart.`;
  }

  addRelatedProduct(product: Product): void {
    this.cartService.addToCart(product);
  }

  showFallbackImage(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.src = '/assets/product-placeholder.svg';
  }
}
