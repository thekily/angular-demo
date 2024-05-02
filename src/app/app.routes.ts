import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1552511735.
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', loadComponent: () => import('./product-list/product-list.component').then(m => m.ProductListComponent) },
    { path: 'product-details/:id', loadComponent: () => import('./product-details/product-details.component').then(m => m.ProductDetailsComponent) },
    { path: 'cart', loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent) },
    { path: 'checkout', loadComponent: () => import('./checkout/checkout.component').then(m => m.CheckoutComponent) },
];
