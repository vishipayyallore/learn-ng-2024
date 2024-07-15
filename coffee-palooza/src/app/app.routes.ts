// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
      { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'list', component: CoffeeListComponent, title: 'List' },
      { path: 'contact', component: ContactComponent, title: 'Contact Us' },
    { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];
