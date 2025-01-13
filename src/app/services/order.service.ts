import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = 'https://api.mockorders.com/orders';  // Placeholder URL

  constructor(private http: HttpClient) {}

  getOrderHistory(): Observable<any[]> {
    // Mock order history or replace with a real API call
    const mockOrders = [
      { id: '123', date: '2024-10-29', status: 'Delivered', total: 120.00 },
      { id: '124', date: '2024-10-25', status: 'Shipped', total: 89.99 }
    ];
    return of(mockOrders); // Use this line for testing
  }
}
