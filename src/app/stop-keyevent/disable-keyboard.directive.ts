import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableKeyboard]'
})
export class DisableKeyboardDirective {
  elem: any;

  openFullscreen(): void {

    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }

  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeyDown(event: KeyboardEvent) {
    event.preventDefault(); //why not come in?
  }

  @HostListener('document:keyup', ['$event'])
  onDocumentKeyUp(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener('document:keypress', ['$event'])
  onDocumentKeyPress(event: KeyboardEvent) {
    event.preventDefault();
  }

  @HostListener('document:contextmenu', ['$event'])
  onDocumentRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  constructor() {
    this.elem = document.documentElement;
    this.openFullscreen();
  }

}
