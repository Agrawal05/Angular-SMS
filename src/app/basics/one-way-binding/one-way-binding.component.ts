import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slogan: string = 'This is a slogan';
  source: string = '/assets/Capture.PNG';
  displayPropertyBindingPara: boolean = true;
  searchValue: string = '';

  getSlogan(): any {
    return 'This is a getSlogan';
  }

  changeSearchValue(event: Event): void {
    this.searchValue = (<HTMLInputElement>event.target).value;
  }

}
