import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
@Input() studentHeader: string='';
isAccordionOpen: boolean = true;
/*@Input() ButtonName: string;
@Output() OnClick1 = new EventEmitter<string>();*/

  constructor() { }

  ngOnInit(): void {
  }

}
