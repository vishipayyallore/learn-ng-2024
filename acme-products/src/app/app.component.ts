import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StarComponent } from './shared/star/star.component';

@Component({
  selector: 'sv-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Acme Products';
}
