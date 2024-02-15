import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  @Input() value1: string = 'proacademy';

  constructor() {
    console.log("Contructor called!");
    console.log(this.value1);
  }

  ngOnChanges(change: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(this.value1);
    console.log(change);
  }

  ngOnInit(): void {
    console.log("ngOnInit called!");
    console.log(this.value1);
  }

  ngDoCheck() {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called!");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }

}
