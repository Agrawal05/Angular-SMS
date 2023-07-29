import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import  Webcam  from 'webcam-easy';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit, OnDestroy {

  @ViewChild('webcamVideo', {static: true})  webcamVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvasElement', {static: true})  canvasElement!: ElementRef<HTMLCanvasElement>;
  private webcam!: Webcam;

  constructor(private route: Router) { }

  ngOnInit(): void {
    const webcamVideoElement: HTMLVideoElement = this.webcamVideo.nativeElement;
    const canvasElement: HTMLCanvasElement = this.canvasElement.nativeElement;
    this.webcam = new Webcam(webcamVideoElement, 'user', canvasElement);
    this.webcamStart();
    interval(1000).subscribe(any => {
      this.webcamSnap();
    })
  }

webcamStart(){
  this.webcam.start()
  .then(result => {
    console.log("webcam started");
  })
  .catch(err => {
    console.log(err);
  });
}

webcamStop(){
  this.webcam.stop();
  this.route.navigate(['Home']);
  console.log("webcam stopped!");
}

webcamSnap(){
  const  webcam = this.webcam.snap();
  console.log(webcam)
}

ngOnDestroy(): void {
    this.webcamStop();
}

}
