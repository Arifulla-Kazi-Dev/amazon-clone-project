import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { ProductManagementComponent } from './pages/admin/product-management/product-management.component';
import { OrderManagementComponent } from './pages/admin/order-management/order-management.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { FashionComponent } from './pages/fashion/fashion.component';
import { HomeKitchenComponent } from './pages/home-kitchen/home-kitchen.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },  // Optional alternative route
  { path: 'search', component: SearchResultsComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'fashion', component: FashionComponent },
  { path: 'home-kitchen', component: HomeKitchenComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'account', component: UserAccountComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: 'products', component: ProductManagementComponent },
      { path: 'orders', component: OrderManagementComponent },
    ]
  },
  { path: 'payment', component: PaymentFormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
