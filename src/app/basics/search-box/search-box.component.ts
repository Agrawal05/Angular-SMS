import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  searchedValue: string = '';
  @Output() searchedValueData: EventEmitter<string> =  new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchData(){
    this.searchedValueData.emit(this.searchedValue);
  }

}
