import { HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

@Input() Name: string='';
@Input() backgroundColor: string = '';  
@Output() OnClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(){
    this.OnClick.emit();
  }
  
}
