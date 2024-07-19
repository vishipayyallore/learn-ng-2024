import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'contact', component: ContactComponent, title: 'Contact Us' },
    { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];

