import {Component} from '@angular/core';

@Component({
  selector: 'demo-forms',
  templateUrl: './forms.html',
})
export class DemoForms {

  required = false;

  hasError = false;
  error = 'The input has an error!';

  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
}
