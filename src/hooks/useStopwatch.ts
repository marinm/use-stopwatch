export type OnTick = () => void;

export type Stopwatch = {
    start: (options: { onTick: OnTick }) => void;
    tap: (message: string) => void;
    stop: () => void;
};

export function useStopwatch(): Stopwatch {
    let interval: null | number = null;

    console.log("useStopwatch");

    return {
        start({ onTick }) {
            console.log("starting...");
            if (interval !== null) {
                console.log("already started");
                return;
            }
            interval = window.setInterval(onTick, 1000);
            console.log("started");
        },
        tap(message: string) {
            if (interval === null) {
                console.log("not started");
                return;
            }
            console.log(message);
        },
        stop() {
            console.log("stopping...");
            if (interval === null) {
                console.log("already stopped");
                return;
            }
            window.clearInterval(interval);
            interval = null;
            console.log("stopped");
        },
    };
}
