import { useStopwatch, Stopwatch } from "../hooks/useStopwatch";

export function StopwatchControls() {
    const stopwatch: Stopwatch = useStopwatch();

    function start() {
        stopwatch.start({
            onTick: () => console.log(`tick ${Date.now()}`),
        });
    }

    function tap() {
        stopwatch.tap(`tap ${Date.now()}`);
    }

    function stop() {
        stopwatch.stop();
    }

    return (
        <div
            style={{
                border: "1px solid black",
                padding: "1em",
                width: "fit-content",
            }}
        >
            <button onClick={start}>Start</button>
            <button onClick={tap}>Tap</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
}
