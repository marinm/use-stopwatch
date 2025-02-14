import { useConnection, Connection } from "../hooks/useConnection";

export default function ConnectionControls() {
    const connection: Connection = useConnection();

    function open() {
        connection.open({
            onEvent: () => console.log(`event ${Date.now()}`),
        });
    }

    function close() {
        connection.close();
    }

    function immediately() {
        connection.immediately(`event ${Date.now()}`);
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
