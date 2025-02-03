import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, FormsModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navigateToAccount() {
    console.log("Navigating to account...");
    this.router.navigate(['/account']);
  }
  
  categories = [
    { name: 'Electronics', route: '/electronics' },
    { name: 'Fashion', route: '/fashion' },
    { name: 'Home & Kitchen', route: '/home-kitchen' }
  ];

  cartItemCount = 0; // Placeholder for cart item count
  cartItems: any;

  constructor(private router: Router) {}

  onSearch(searchTerm: string) {
    if (searchTerm) {
      this.router.navigate(['/search'], { queryParams: { q: searchTerm } });
    }
  }
  
  navigateToCategory(route: string): void {
    this.router.navigate([route]);
  }

  navigateHome() {
    console.log('Home link clicked');
    this.router.navigate(['/']);
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}
