import {Component, Inject, LOCALE_ID} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  number = 123.23;
  date = new Date();

  constructor(@Inject(LOCALE_ID) public localeID: string)  {}
}
