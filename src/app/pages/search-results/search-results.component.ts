import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.services';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';

@Component({
  selector: 'app-search-results',
  imports: [CommonModule, FormsModule, RouterLink, ProductCardComponent],
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  readonly categories = [
    { label: 'All departments', value: '' },
    { label: 'Electronics', value: 'Electronics' },
    { label: 'Fashion', value: 'Fashion' },
    { label: 'Home & Kitchen', value: 'HomeKitchen' }
  ];

  searchTerm = '';
  selectedCategory = '';
  sortOption = 'relevance';
  searchResults: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.searchTerm = params.get('q') ?? '';
      this.selectedCategory = params.get('category') ?? '';
      this.updateResults();
    });
  }

  search(): void {
    this.router.navigate(['/search'], {
      queryParams: {
        q: this.searchTerm.trim() || null,
        category: this.selectedCategory || null
      }
    });
  }

  updateResults(): void {
    this.searchResults = this.productService.searchProducts(this.searchTerm, this.selectedCategory)
      .sort((first, second) => {
        if (this.sortOption === 'price-low') {
          return first.price - second.price;
        }
        if (this.sortOption === 'price-high') {
          return second.price - first.price;
        }
        if (this.sortOption === 'rating') {
          return (second.rating ?? 0) - (first.rating ?? 0);
        }
        return first.id - second.id;
      });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
