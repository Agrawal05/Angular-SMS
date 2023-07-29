import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyboardControlService {
  private isKeyboardEnabled = true;

  constructor() { }

  enableKeyboard() {
    this.isKeyboardEnabled = true;
  }

  disableKeyboard() {
    this.isKeyboardEnabled = false;
  }

  isKeyboardActive(): boolean {
    return this.isKeyboardEnabled;
  }

}
