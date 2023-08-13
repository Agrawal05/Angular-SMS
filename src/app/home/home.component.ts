import { Component, NgModule, OnInit } from '@angular/core';
import *as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  searchData: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  searchValueData(event: string) {
    this.searchData = event;
  }

  tabNameMatches(searchData: string): boolean {
    console.log(searchData)
    const tabNames = ['AddStudent', 'GetStudents', 'Calendar', 'ListEvents', 'WebCam', 'Devtool Detect', 'Comment', 'Key board', 
    'One way binding', 'Two way binding', 'Directives', 'Editor', 'Switch Screen'];
    return tabNames.some((tabName) => tabName.toLowerCase().includes(searchData.toLowerCase()));
  }

}
