import { CommonModule } from '@angular/common';
import { Component, DestroyRef, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  private readonly cartService = inject(CartService);
  private readonly destroyRef = inject(DestroyRef);

  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  isFavorite = false;
  isInCart = false;

  get categoryLabel(): string {
    return this.product.category === 'HomeKitchen' ? 'Home & Kitchen' : this.product.category;
  }

  get discountPercentage(): number | null {
    if (!this.product.previousPrice) {
      return null;
    }
    return Math.round((1 - this.product.price / this.product.previousPrice) * 100);
  }

  ngOnInit(): void {
    this.cartService.cartItems$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(items => {
        this.isInCart = items.some(item => item.id === this.product.id);
      });
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  addToCartClicked(): void {
    if (this.isInCart) {
      return;
    }
    this.addToCart.emit(this.product);
  }

  showFallbackImage(event: Event): void {
    const image = event.target as HTMLImageElement;
    image.src = '/assets/product-placeholder.svg';
  }
}
