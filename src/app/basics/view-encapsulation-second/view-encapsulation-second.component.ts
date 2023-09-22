import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-second',
  templateUrl: './view-encapsulation-second.component.html',
  styleUrls: ['./view-encapsulation-second.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationSecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
