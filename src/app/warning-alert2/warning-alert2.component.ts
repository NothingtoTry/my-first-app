import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert2',
  template: '<div class="alert">{{ message }}</div>',
  styles: [`.alert { padding: 10px; border: 1px solid #FFA500; background-color: #FFFFE0; }`]
})
export class WarningAlert2Component {
  message = 'Warning! This is a warning message.';
}
