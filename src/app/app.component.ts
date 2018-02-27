import {Component, Inject, LOCALE_ID} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export enum TestEnum {
  first,
  second,
  third,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  number = 123.23;
  date = new Date();

  shouldThrow = false;

  form: FormGroup;
  TestEnum = TestEnum;

  constructor(@Inject(LOCALE_ID) public localeID: string, fb: FormBuilder)  {
    this.form = fb.group({
      'enum': [TestEnum.first, Validators.pattern(/\d*/)],
      'number': [123.11, Validators.min(0)],
    });
  }

  // noinspection JSMethodCanBeStatic
  onSubmit(form) {
    console.log(form);
  }

  iWillThrowAnError(): number {
    if (this.shouldThrow) {
      throw Error('foo error');
    }
    return 123;
  }
}
