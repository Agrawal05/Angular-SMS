import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-switch-screen',
  templateUrl: './switch-screen.component.html'
})
export class SwitchScreenComponent implements OnInit {
  window: string = '';
  constructor() { }

  ngOnInit(): void {

  }

  @HostListener('window:blur', ['$event'])
  onBlur(event: Event): void {
    this.window = 'Window blurred'
    // Perform actions when the window loses focus
  }

  @HostListener('window:focus', ['$event'])
  onFocus(event: Event): void {
    this.window = 'Window focused'
    // Perform actions when the window gains focus
  }

}
