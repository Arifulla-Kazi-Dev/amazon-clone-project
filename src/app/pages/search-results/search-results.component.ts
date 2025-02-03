import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.services';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-results',
    imports: [CommonModule, FormsModule],
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchTerm: string = '';
  searchResults: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // Subscribe to query parameters to get search term and filter products
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
      this.filterProducts();
    });
  }

  // Function to filter products based on search term
  filterProducts(): void {
    const allProducts = this.productService.getProducts(); // Fetch the full product list
    if (this.searchTerm) {
      this.searchResults = allProducts.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.searchResults = []; // If no search term, clear results
    }
  }
}
