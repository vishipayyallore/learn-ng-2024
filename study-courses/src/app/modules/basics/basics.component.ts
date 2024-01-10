import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent {
  title = '<h1>Study Courses</h1><script>alert("Hello World");</script>';

  onDivClicked() {
    console.log(`Div was clicked at ${new Date().toUTCString()}`);
  }

  onTitleKeyUp(currentTitle: string) {
    console.log(`Key up event was triggered at ${new Date().toUTCString()}`);
    console.log(currentTitle);

    this.title = currentTitle;
  }

}
