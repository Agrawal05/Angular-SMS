import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { Observable, Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-screen-shot',
  templateUrl: './screen-shot.component.html',
  styleUrls: ['./screen-shot.component.css']
})
export class ScreenShotComponent implements OnInit {
  minutes: any;
  seconds: any
  startTime = 1000;
  lastTime: number;
  timer: Observable<number> | any;
  subscription: Subscription = new Subscription();
  ticks: number;
  capturedImage: any;
  webCam: any;
  subscriptions: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
    this.initializeTimer();
    this.webcamAndScreenShotInterval();
  }

  initializeTimer(): void {
    this.minutes = Math.floor(this.startTime / 60); // Calculate minutes
    this.seconds = this.startTime % 60;
    this.lastTime = this.startTime;
    this.timer = timer(0, 1000); // Emit value every second
    this.subscription = this.timer.subscribe((t: any) => {
      this.ticks = this.startTime - t;
      this.minutes = Math.floor(this.ticks / 60);
      this.seconds = this.ticks % 60;

    });
  }

  async webcamAndScreenShotInterval(): Promise<void> {
    this.subscriptions.add(
      this.webCam = interval(10000).subscribe(async (x) => {
        await this.clickme();
        console.log(this.capturedImage)
      })
    );
  }

  async clickme(): Promise<void> {
    const canvas = await html2canvas(document.body);
    this.capturedImage = canvas.toDataURL();

    await new Promise<void>((resolve) => {
      canvas.toBlob(async (blob: any) => {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          let base64data = reader.result;
          resolve();
        };
      });
    });
  }
}
