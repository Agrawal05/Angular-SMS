import { Component, HostListener, OnInit } from '@angular/core';
import { KeyboardControlService } from '../keyboard-control.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {
  public keypressed;
  disableKeyboard: boolean = false;
  elem1 : any;



  constructor(private keyboardControlService: KeyboardControlService) {}

  ngOnInit(): void {
    this.elem1 = document.documentElement;
    this.openFullscreen();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent): void {
    if (!this.keyboardControlService.isKeyboardActive()) {
      event.preventDefault();
    }
  }

  // disableKeyboardInput(): void {
  //   const overlay = document.querySelector('app-overlay') as any;
  //   if (overlay) {
  //     overlay.showOverlay();
  //   }
  // }

  // // Call this method when you want to enable keyboard input again
  // enableKeyboardInput(): void {
  //   const overlay = document.querySelector('app-overlay') as any;
  //   if (overlay) {
  //     overlay.hideOverlay();
  //   }
  // }

  // @HostListener('contextmenu', ['$event'])
  // onRightClick(event: any) {
  //   event.preventDefault();
  // }

  
  // @HostListener('document:fullscreenchange', ['$event'])
  // @HostListener('document:webkitfullscreenchange', ['$event'])
  // @HostListener('document:mozfullscreenchange', ['$event'])
  // @HostListener('document:MSFullscreenChange', ['$event'])
  // @HostListener('document:keyup.escape', ['$event'])
  // onKeyUpHandler(event: Event) {
  //   this.openFullscreen();
  // }

  openFullscreen(): void {
    if (this.elem1.requestFullscreen) {
      this.elem1.requestFullscreen().catch((e: any) => {
        // Handle the error, if any.
      });
    } else if (this.elem1.mozRequestFullScreen) {
      /* Firefox */
      (this.elem1 as any).mozRequestFullScreen();
    } else if (this.elem1.webkitRequestFullscreen) {
      /* Chrome, Safari, and Opera */
      this.elem1.webkitRequestFullscreen();
    } else if (this.elem1.msRequestFullscreen) {
      /* IE/Edge */
      this.elem1.msRequestFullscreen();
    }
  }

  // @HostListener('document:keyup', ['$event'])
  // onKeyPress(event: KeyboardEvent): void {
  //   event.preventDefault();
  // }

  // @HostListener('window:blur')
  // onBlur(): void {
  //   // When the window loses focus (e.g., user switches screens), blur the current element
  //   const currentElement = document.activeElement as HTMLElement;
  //   if (currentElement) {
  //     currentElement.blur();
  //   }
  // }

}
