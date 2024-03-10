import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onNumberGenerated(number: number) {
    if (number % 2 === 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }

// toggleDetails() {
    //this.displayDetails = !this.displayDetails;
    //this.logs.push(`Button clicked at ${new Date().toLocaleTimeString()}`);


    
  }
}


