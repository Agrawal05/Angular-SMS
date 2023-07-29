import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { KeyboardControlService } from '../keyboard-control.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit, OnDestroy {
  @Input() name: string;
  
  constructor(private keyboardControlService: KeyboardControlService) {}

  ngOnInit(): void {
    this.keyboardControlService.disableKeyboard();
  }

  ngOnDestroy(): void {
    this.keyboardControlService.enableKeyboard();
  }

}
