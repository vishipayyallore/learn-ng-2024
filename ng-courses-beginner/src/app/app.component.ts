import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from './components/navigation/top-navbar/top-navbar.component';
import { FooterComponent } from './components/navigation/footer/footer.component';

@Component({
  selector: 'sv-root',
  standalone: true,
  imports: [RouterOutlet, TopNavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ng Courses Beginner';
}
