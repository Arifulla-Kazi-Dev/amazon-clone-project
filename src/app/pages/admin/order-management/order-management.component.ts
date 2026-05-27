import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-management',
  imports: [CommonModule],
  templateUrl: './order-management.component.html',
  styleUrl: './order-management.component.css'
})
export class OrderManagementComponent {
  readonly orders = [
    { number: 'NC-10948', customer: 'Olivia Martin', date: 'May 27, 2026', total: 32990, status: 'Processing' },
    { number: 'NC-10947', customer: 'Ethan Lee', date: 'May 27, 2026', total: 2499, status: 'Packed' },
    { number: 'NC-10942', customer: 'Sophia Patel', date: 'May 26, 2026', total: 12495, status: 'Shipped' },
    { number: 'NC-10935', customer: 'Noah Garcia', date: 'May 26, 2026', total: 7995, status: 'Delivered' }
  ];
}
