import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  numbers: number[] = [1, 2, 4, 5, 7, 8, 9, 45, 56];

  constructor() { }

  ngOnInit(): void {
  }

}
