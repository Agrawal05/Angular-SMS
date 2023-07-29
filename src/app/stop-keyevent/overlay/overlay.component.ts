import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnInit {
  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  onKeyPress(event: KeyboardEvent): void {
    if (this.isActive) {
      event.preventDefault();
    }
  }

  showOverlay(): void {
    this.isActive = true;
  }

  hideOverlay(): void {
    this.isActive = false;
  }

}
