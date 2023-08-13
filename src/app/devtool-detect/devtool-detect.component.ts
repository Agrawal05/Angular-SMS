import { Component, OnInit } from '@angular/core';
// import devtools from './node_modules/devtools-detect';

const devtools = {
	isOpen: false,
	orientation: undefined,
};

  
const threshold = 170;
  
const emitEvent = (isOpen, orientation) => {
  globalThis.dispatchEvent(new globalThis.CustomEvent('devtoolschange', {
    detail: {
      isOpen,
      orientation,
    },
  }));
};

@Component({
  selector: 'app-devtool-detect',
  templateUrl: './devtool-detect.component.html',
  styleUrls: ['./devtool-detect.component.css']
})
export class DevtoolDetectComponent implements OnInit {

  main: any;
  devtool: string = 'hi';
  isopen: string = 'hii';

  constructor() { }

  ngOnInit(): void {
    this.method1();
    this.areDevToolsOpen().then((open) => {
      if (open) {
        this.isopen = 'open';
        // Perform actions when developer tools are detected
      } else {
        this.isopen = 'closed';
      }
    });
  }

  method1() {
    this.main = ({emitEvents = true} = {}) => {
      const widthThreshold = globalThis.outerWidth - globalThis.innerWidth > threshold;
      const heightThreshold = globalThis.outerHeight - globalThis.innerHeight > threshold;
      const orientation = widthThreshold ? 'vertical' : 'horizontal';
    
      if (
        !(heightThreshold && widthThreshold)
        && ((globalThis.Firebug && globalThis.Firebug.chrome && globalThis.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
      ) {
        if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
          emitEvent(true, orientation);
        }
    
        devtools.isOpen = true;
        devtools.orientation = orientation;
        this.devtool = 'Open';
      } else {
        if (devtools.isOpen && emitEvents) {
          emitEvent(false, undefined);
        }
    
        devtools.isOpen = false;
        devtools.orientation = undefined;
        this.devtool = 'Closed';
      }
    };

      this.main({emitEvents: false});
      setInterval(this.main, 1000);
  }

  //second method but not working 100% correct
  areDevToolsOpen(): Promise<boolean> {
    return new Promise((resolve) => {
      const devToolsListener = (e: any) => {
        // The listener will be triggered when the developer tools are opened
        resolve(true);
        window.removeEventListener('devtoolschange', devToolsListener);
      };

      // Add a listener for the devtoolschange event
      window.addEventListener('devtoolschange', devToolsListener);

      // Trigger the devtoolschange event
      console.log('Check for devtools');
    });
  }

  

}

