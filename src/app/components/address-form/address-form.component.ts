import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-address-form',
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './address-form.component.html',
    styleUrl: './address-form.component.css'
})
export class AddressFormComponent {
  @Input() addressData: any; // Input to load existing address data
  @Output() addressSubmitted = new EventEmitter<any>(); // Event emitter for form submission

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}$')]],
      country: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.addressData) {
      this.addressForm.patchValue(this.addressData); // Pre-fill form if data is provided
    }
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.addressSubmitted.emit(this.addressForm.value);
    }
  }
}
