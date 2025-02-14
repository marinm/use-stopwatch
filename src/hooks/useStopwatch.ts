import { useRef, useState } from "react";

export type OnTick = () => void;

export type Stopwatch = {
    elapsed: number;
    start: (options: { onTick: OnTick }) => void;
    tap: (message: string) => void;
    stop: () => void;
};

export function useStopwatch(): Stopwatch {
    const intervalRef = useRef<null | number>(null);
    const [elapsed, setElapsed] = useState<number>(0);

    return {
        elapsed,
        start({ onTick }) {
            console.log("starting...");
            if (intervalRef.current !== null) {
                console.log("already started");
                return;
            }
            setElapsed(0);
            intervalRef.current = window.setInterval(() => {
                onTick();
                setElapsed((e) => e + 1000);
            }, 1000);
            console.log(`new interval=${intervalRef.current}`);
            console.log("started");
        },
        tap(message: string) {
            if (intervalRef.current === null) {
                console.log("not started");
                return;
            }
            console.log(message);
        },
        stop() {
            console.log("stopping...");
            if (intervalRef.current === null) {
                console.log("already stopped");
                return;
            }
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
            setElapsed(0);
            console.log("stopped");
        },
    };
}
