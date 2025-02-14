export type OnTick = () => void;

export type Stopwatch = {
    open: (options: { onTick: OnTick }) => void;
    immediately: (message: string) => void;
    close: () => void;
};

export function useStopwatch(): Stopwatch {
    let interval: null | number = null;

    console.log("useStopwatch");

    return {
        open({ onTick }) {
            console.log("opening...");
            if (interval !== null) {
                console.log("already open");
                return;
            }
            interval = window.setInterval(onTick, 1000);
            console.log("opened");
        },
        immediately(message: string) {
            if (interval === null) {
                console.log("not open");
                return;
            }
            console.log(message);
        },
        close() {
            console.log("closing...");
            if (interval === null) {
                console.log("already closed");
                return;
            }
            window.clearInterval(interval);
            interval = null;
            console.log("closed");
        },
    };
}
