import { useStopwatch, Stopwatch } from "../hooks/useStopwatch";

export function StopwatchControls() {
    const stopwatch: Stopwatch = useStopwatch();

    function open() {
        stopwatch.open({
            onTick: () => console.log(`event ${Date.now()}`),
        });
    }

    function close() {
        stopwatch.close();
    }

    function immediately() {
        stopwatch.immediately(`event ${Date.now()}`);
    }

    return (
        <div
            style={{
                border: "1px solid black",
                padding: "1em",
                width: "fit-content",
            }}
        >
            <button onClick={open}>Open</button>
            <button onClick={immediately}>Immediately</button>
            <button onClick={close}>Close</button>
        </div>
    );
}
