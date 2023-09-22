import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TemplateReferenceComponent } from '../template-reference/template-reference.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @ViewChild('dob') DOB: ElementRef;
  @ViewChild("age") Age: ElementRef;
  @ViewChild(TemplateReferenceComponent, {static: true}) tempRefComp: TemplateReferenceComponent;

  constructor() { }

  ngOnInit(): void {
  }

  calculateAge(): void{
    let dobYear = new Date(this.DOB.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - dobYear;
    this.Age.nativeElement.value = age;
  }

}
