export type OnEvent = () => void;

export type Connection = {
    open: (options: { onEvent: OnEvent }) => void;
    immediately: (message: string) => void;
    close: () => void;
};

export function useConnection(): Connection {
    let interval: null | number = null;

    console.log("useConnection");

    const connection: Connection = {
        open({ onEvent }) {
            console.log("opening...");
            if (interval !== null) {
                console.log("already open");
                return;
            }
            interval = window.setInterval(onEvent, 1000);
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

    return connection;
}
