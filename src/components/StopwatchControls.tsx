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

    const format = new Intl.NumberFormat("en-US", {
        minimumIntegerDigits: 1,
        minimumFractionDigits: 3,
    });

    return (
        <div
            style={{
                display: "flex",
                gap: "1em",
                border: "1px solid black",
                padding: "1em",
                width: "fit-content",
            }}
        >
            <button onClick={start}>Start</button>
            <button onClick={tap}>Tap</button>
            <button onClick={stop}>Stop</button>
            <div
                style={{
                    textAlign: "right",
                    width: "10ch",
                }}
            >
                {format.format(stopwatch.elapsed / 1000.0)}
            </div>
        </div>
    );
}
