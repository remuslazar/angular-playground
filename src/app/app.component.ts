import {Component, Inject, LOCALE_ID} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  number = 123.23;
  date = new Date();

  shouldThrow = false;
  constructor(@Inject(LOCALE_ID) public localeID: string)  {}


  iWillThrowAnError(): number {
    if (this.shouldThrow) {
      throw Error('foo error');
    }
    return 123;
  }
}
