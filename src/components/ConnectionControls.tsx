import { useRef } from "react";
import { useConnection, Connection } from "../hooks/useConnection";

export default function ConnectionControls() {
    const connectionRef = useRef<null | Connection>(null);

    if (!connectionRef.current) {
        connectionRef.current = useConnection();
    }

    function open() {
        connectionRef.current?.open({
            onEvent: () => console.log(`event ${Date.now()}`),
        });
    }

    function close() {
        connectionRef.current?.close();
    }

    function immediately() {
        connectionRef.current?.immediately(`event ${Date.now()}`);
    }

    return (
        <div style={{ border: "1px solid black", padding: "1em" }}>
            <button onClick={open}>Open</button>
            <button onClick={immediately}>Immediately</button>
            <button onClick={close}>Close</button>
        </div>
    );
}
