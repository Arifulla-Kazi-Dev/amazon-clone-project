import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { map } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private readonly cartService = inject(CartService);

  readonly categories = [
    { name: 'Electronics', value: 'Electronics', route: '/electronics' },
    { name: 'Fashion', value: 'Fashion', route: '/fashion' },
    { name: 'Home & Kitchen', value: 'HomeKitchen', route: '/home-kitchen' }
  ];

  readonly cartItemCount$ = this.cartService.cartItems$.pipe(
    map(items => items.reduce((count, item) => count + item.quantity, 0))
  );

  searchTerm = '';
  selectedCategory = '';
  isCategoryMenuOpen = false;
  isMenuOpen = false;

  constructor(private router: Router) {}

  get selectedCategoryLabel(): string {
    return this.categories.find(category => category.value === this.selectedCategory)?.name ?? 'All';
  }

  onSearch(): void {
    this.router.navigate(['/search'], {
      queryParams: {
        q: this.searchTerm.trim() || null,
        category: this.selectedCategory || null
      }
    });
    this.isCategoryMenuOpen = false;
    this.isMenuOpen = false;
  }

  toggleCategoryMenu(): void {
    this.isCategoryMenuOpen = !this.isCategoryMenuOpen;
  }

  selectCategory(value: string): void {
    this.selectedCategory = value;
    this.isCategoryMenuOpen = false;
  }

  closeCategoryMenu(): void {
    this.isCategoryMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  closeCategoryMenuOnOutsideClick(event: MouseEvent): void {
    const target = event.target as Element | null;
    if (!target?.closest('.category-picker')) {
      this.isCategoryMenuOpen = false;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.isCategoryMenuOpen = false;
  }
}
