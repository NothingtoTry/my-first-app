import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert2',
  template: '<div class="alert">{{ message }}</div>',
  styles: [`.alert { padding: 10px; border: 1px solid #008000; background-color: #E6FFE6; }`]
})
export class SuccessAlert2Component {
  message = 'Success! Your operation was successful.';
}
