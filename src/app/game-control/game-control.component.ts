import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberGenerated = new EventEmitter<number>();

  interval: any;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.counter++;
      this.numberGenerated.emit(this.counter);
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
