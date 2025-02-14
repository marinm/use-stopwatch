import { useRef } from "react";
import "./App.css";
import { useConnection, Connection } from "./hooks/useConnection";

function App() {
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
        <div>
            <button onClick={open}>Open</button>
            <button onClick={immediately}>Immediately</button>
            <button onClick={close}>Close</button>
        </div>
    );
}

export default App;
