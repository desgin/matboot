import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {

  value: string;
  a: number;
  b: number;
  today: number;
  pi: number;
  percentValue: number;
  

  constructor() { }

  ngOnInit(): void {
    this.value = "Learn Date";
    this.a = 0.259;
    this.b = 1.3495;
    this.today  = Date.now();
    this.pi = 3.14159265359;
    this.percentValue = 1.3495;
  }

}
