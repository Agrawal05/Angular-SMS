import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-lifecycle-hook',
  templateUrl: './use-lifecycle-hook.component.html',
  styleUrls: ['./use-lifecycle-hook.component.css']
})
export class UseLifecycleHookComponent implements OnInit {

  inputValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(text: HTMLInputElement){
    this.inputValue = text.value;
  }

}
