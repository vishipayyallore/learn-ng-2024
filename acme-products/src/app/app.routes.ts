import { Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { ProductListComponent } from './products/product-list/product-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: WelcomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
