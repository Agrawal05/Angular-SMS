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

  constructor() { }

  ngOnInit(): void {
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
      setInterval(this.main, 10000);

    // if (devtools.isOpen) {
    //   console.log('Devtools is open!');
    //   // Add your logic here for when devtools is open
    // } else {
    //   console.log('Devtools is closed!');
    // }
    // this.isDevToolsOpen = isDevToolsOpen();
    // if (this.isDevToolsOpen) {
    //   console.log('Developer tools are open!');
    //   // Perform additional actions if needed
    // } else {
    //   console.log('Developer tools are not open.');
    //   // Perform alternative actions if needed
    // }


    // window.addEventListener('devtoolschange', function (e) {
    //       var isOpen = e.detail.isOpen;
    //       if (isOpen) {
    //         console.log('Developer tools are open!');
    //         // Perform actions when the developer tools are open
    //       } else {
    //         console.log('Developer tools are closed.');
    //         // Perform actions when the developer tools are closed
    //       }
    //     });

  }

}

// <script src="https://unpkg.com/devtools-detect@1.2.1/dist/index.js"></script>
// <script>
//   window.addEventListener('devtoolschange', function (e) {
//     var isOpen = e.detail.isOpen;
//     if (isOpen) {
//       console.log('Developer tools are open!');
//       // Perform actions when the developer tools are open
//     } else {
//       console.log('Developer tools are closed.');
//       // Perform actions when the developer tools are closed
//     }
//   });
// </script>
