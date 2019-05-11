import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tharusha Dilshan';

  onClickTest(event) {
    alert("This came from event binding");
  }

}
