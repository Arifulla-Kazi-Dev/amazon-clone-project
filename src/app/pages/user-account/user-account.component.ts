import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddressFormComponent } from '@app/components/address-form/address-form.component';

@Component({
    selector: 'app-user-account',
    imports: [CommonModule, FormsModule, AddressFormComponent],
    templateUrl: './user-account.component.html',
    styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {
  editMode = false;

  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Springfield, USA',
    orders: [
      { id: 'A001', date: '2024-10-01', total: 59.99 },
      { id: 'A002', date: '2024-10-10', total: 99.49 },
    ],
    subscriptionStatus: 'Active',
    notificationsEnabled: true,
  };

  // Define a separate property to handle address data
  userAddress = {
    street: '123 Main St',
    city: 'Springfield',
    state: 'IL',
    postalCode: '62701',
    country: 'USA'
  };

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  savePersonalInfo() {
    this.editMode = false;
    alert('Personal information updated successfully!');
  }

  viewOrder(orderId: string) {
    alert(`Viewing details for order ${orderId}`);
  }

  toggleNotifications() {
    this.user.notificationsEnabled = !this.user.notificationsEnabled;
  }

  changePassword() {
    alert('Change password clicked');
  }

  // Handle address update from the address form component
  onAddressUpdate(updatedAddress: any) {
    this.userAddress = updatedAddress;
    this.user.address = `${updatedAddress.street}, ${updatedAddress.city}, ${updatedAddress.state}, ${updatedAddress.postalCode}, ${updatedAddress.country}`;
    alert('Address updated successfully!');
  }
}
