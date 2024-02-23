import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRenderer]'
})
export class RendererDirective implements OnInit{

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'background', 'Red');
    this.renderer.addClass(this.element.nativeElement, 'container');
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is a title');

  }

}
