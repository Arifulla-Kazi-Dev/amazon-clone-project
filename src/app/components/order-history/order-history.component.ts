import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-order-history',
    imports: [CommonModule, FormsModule],
    templateUrl: './order-history.component.html',
    styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrderHistory().subscribe({
      next: (data) => (this.orders = data),
      error: (error) => console.error('Failed to fetch order history', error)
    });
  }

  viewOrderDetails(orderId: string) {
    // Implement logic to view detailed order
    console.log(`Viewing details for order ID: ${orderId}`);
  }
}
