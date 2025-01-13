import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule,
    UserAccountComponent,
    RouterModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    AppComponent,           // Import standalone components here
    ProductListComponent,    // Import standalone components here
    ProductCardComponent     // Import standalone components here
  ],
  providers: []
})
export class AppModule {}
