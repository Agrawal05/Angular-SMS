declare module 'webcam-easy'{
    export default class Webcam {
        constructor(webcamElement: HTMLVideoElement, facialMode?: string, canvasElement?: HTMLCanvasElement);
        start(): Promise<void>;
        stop(): void;
        snap(): void;
    }
}
