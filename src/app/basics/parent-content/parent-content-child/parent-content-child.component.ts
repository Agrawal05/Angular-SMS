import { AfterViewInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-content-child',
  templateUrl: './parent-content-child.component.html',
  styleUrls: ['./parent-content-child.component.css']
})
export class ParentContentChildComponent implements OnInit, AfterViewInit {

  @ContentChild('paragraph') paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('onInit = ', this.paragraph)
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit = ', this.paragraph.nativeElement.textContent);
    this.paragraph.nativeElement.textContent = 'New Paragraph';
    console.log('ngAfterViewInit 2= ', this.paragraph.nativeElement.textContent);
  }

}
