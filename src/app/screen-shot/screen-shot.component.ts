import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { Observable, Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-screen-shot',
  templateUrl: './screen-shot.component.html',
  styleUrls: ['./screen-shot.component.css']
})
export class ScreenShotComponent implements OnInit, OnDestroy {

  @ViewChild('videoElement') videoElement: ElementRef;

  title = 'HtmlCanvas';
  timeLeft: number = 60;
  interval: any;
  element: any;
  thecanvas: any;
  dataUrl: string = '';
  canvas: any;
  context: any;
  video: any;
  firstTime = true;
  captureStream: any;
  screenshotInterval: Subscription;
  ngOnInit() {
    this.element = document.body as HTMLCanvasElement;

    this.interval = setInterval(() => {
      this.timeLeft++;
    }, 1000)
    this.captureScreen();
    this.startScreenshotInterval();
  }


  async captureScreen() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const video: HTMLVideoElement = this.videoElement.nativeElement;

    try {
      if (this.firstTime) {
        // Prompt the user for screen selection only the first time
        this.firstTime = false;
        this.captureStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = this.captureStream;
        await video.play(); // Ensure video is loaded
      }

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.dataUrl = canvas.toDataURL('image/png');
      
      // Handle the captured frame as needed (e.g., display it, save it)
      // For example, you can set it as the source of an image tag:
      // this.capturedImageSrc = frame;

    } catch (err) {
      console.error('Error: ' + err);
    }
  }
  
  startScreenshotInterval(): void {
    this.screenshotInterval = interval(20000).subscribe(async (x) => {
      // Capture a screenshot every 20 seconds
      await this.captureScreen();
    });
  }

  ngOnDestroy(): void {
    if (this.dataUrl) {
      this.captureStream.getTracks().forEach(track => track.stop());
    }
  }

}