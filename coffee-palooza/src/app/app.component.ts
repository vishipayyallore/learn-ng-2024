import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoffeeListComponent } from './components/coffee-list/coffee-list.component';
import { TopNavbarComponent } from './components/navigation/top-navbar/top-navbar.component';
import { FooterComponent } from './components/navigation/footer/footer.component';

@Component({
  selector: 'sv-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CoffeeListComponent, TopNavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Coffee Palooza';
}
