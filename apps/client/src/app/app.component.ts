import { Component } from '@angular/core';

@Component({
  selector: 'hire-ski-instructor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';

  sayHello(): string {
    return 'Hello';
  }
}
