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

  onDivClicked() {
    console.log(`Div was clicked at ${new Date().toUTCString()}`);
  }

  onTitleKeyUp(currentValue: string) {
    console.log(`Key up event was triggered at ${new Date().toUTCString()}`);
    console.log(currentValue);
  }

}
