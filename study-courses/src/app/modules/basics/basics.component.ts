import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent {
  title = 'Study Courses';

  divClicked() {
    console.log(`Div was clicked at ${new Date().toUTCString()}`);
  }

}
