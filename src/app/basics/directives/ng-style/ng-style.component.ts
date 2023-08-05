import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  numbers: number[] = [1, 2, 4, 5, 7, 8, 9, 45, 56];

  constructor() { }

  ngOnInit(): void {
  }

}
