import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';

@Component({
  selector: 'sv-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CoffeeListComponent, TopNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Coffee Palooza';
}
