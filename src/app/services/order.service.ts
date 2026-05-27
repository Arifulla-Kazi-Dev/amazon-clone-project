import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  getOrderHistory(): Observable<any[]> {
    const mockOrders = [
      { id: '123', date: '2026-05-21', status: 'Delivered', total: 7995 },
      { id: '124', date: '2026-05-24', status: 'Shipped', total: 2499 }
    ];
    return of(mockOrders);
  }
}
