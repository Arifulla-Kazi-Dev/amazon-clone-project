import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentUrl = 'https://api.mockpaymentgateway.com/process';  // Placeholder URL for payment API

  constructor(private http: HttpClient) {}

  processPayment(paymentData: any): Observable<any> {
    // Replace with real API endpoint and request in a production environment
    return this.http.post(this.paymentUrl, paymentData).pipe(
      catchError(error => {
        console.error('Payment processing failed', error);
        return of({ success: false, message: 'Payment processing failed' });
      })
    );
  }
}
