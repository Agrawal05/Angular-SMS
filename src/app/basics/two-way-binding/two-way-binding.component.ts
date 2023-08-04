import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  searchValue: string = 'iphone';

  constructor() { }

  ngOnInit(): void {
  }

  changeSearchValue(event: Event): void{
    this.searchValue = (<HTMLInputElement>event.target).value;
  }

}
