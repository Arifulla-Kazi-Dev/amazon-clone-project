import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-payment-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.css'
})
export class PaymentFormComponent {
  paymentForm: FormGroup;
  isComplete = false;
  hasCartItems = false;
  orderReference = '';
  orderTotal = 0;

  constructor(private fb: FormBuilder, private cartService: CartService) {
    this.paymentForm = this.fb.group({
      nameOnCard: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expirationDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
    this.hasCartItems = this.cartService.getItemCount() > 0;
  }

  onSubmit(): void {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      return;
    }

    this.orderTotal = this.cartService.getTotal();
    this.orderReference = `NC-${Math.floor(Math.random() * 90000 + 10000)}`;
    this.cartService.clearCart();
    this.isComplete = true;
  }
}
