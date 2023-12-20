import { Component } from '@angular/core';

@Component({
  selector: 'sv-star',
  standalone: true,
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss'
})
export class StarComponent {
  cropWidth: any = 75;
  rating: any = 4;
}
