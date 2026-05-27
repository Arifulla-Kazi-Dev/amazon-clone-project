import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddressFormComponent } from '@app/components/address-form/address-form.component';

@Component({
  selector: 'app-user-account',
  imports: [CommonModule, FormsModule, AddressFormComponent],
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {
  activeSection = 'profile';
  editMode = false;
  addressEditMode = false;
  notice = '';

  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    address: '125 MG Road, Bengaluru, Karnataka 560001, India',
    orders: [
      { id: 'NC-10421', date: 'May 14, 2026', total: 7995, status: 'Delivered' },
      { id: 'NC-10688', date: 'May 21, 2026', total: 12999, status: 'Delivered' }
    ],
    subscriptionStatus: 'Plus member',
    notificationsEnabled: true
  };

  userAddress = {
    street: '125 MG Road',
    city: 'Bengaluru',
    state: 'Karnataka',
    postalCode: '560001',
    country: 'India'
  };

  constructor(@Inject(DOCUMENT) private document: Document) {}

  goToSection(section: string): void {
    this.activeSection = section;
    this.document.getElementById(`account-${section}`)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  toggleEditMode(): void {
    this.activeSection = 'profile';
    this.editMode = !this.editMode;
  }

  savePersonalInfo(): void {
    this.editMode = false;
    this.notice = 'Personal information updated.';
  }

  toggleAddressEdit(): void {
    this.activeSection = 'addresses';
    this.addressEditMode = !this.addressEditMode;
  }

  viewOrder(orderId: string): void {
    this.activeSection = 'orders';
    this.notice = `Showing summary for order ${orderId}.`;
  }

  toggleNotifications(): void {
    this.activeSection = 'preferences';
    this.user.notificationsEnabled = !this.user.notificationsEnabled;
    this.notice = `Notifications ${this.user.notificationsEnabled ? 'enabled' : 'paused'}.`;
  }

  changePassword(): void {
    this.activeSection = 'preferences';
    this.notice = 'Password reset instructions are ready to be sent.';
  }

  onAddressUpdate(updatedAddress: typeof this.userAddress): void {
    this.userAddress = updatedAddress;
    this.user.address = `${updatedAddress.street}, ${updatedAddress.city}, ${updatedAddress.state} ${updatedAddress.postalCode}, ${updatedAddress.country}`;
    this.addressEditMode = false;
    this.notice = 'Delivery address updated.';
  }
}
