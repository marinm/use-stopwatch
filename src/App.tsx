import "./App.css";
import { StopwatchControls } from "./components/StopwatchControls";

function App() {
    return (
        <div
            style={{
                width: "50ch",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "1em",
            }}
        >
            <StopwatchControls />
            <StopwatchControls />
            <StopwatchControls />
        </div>
    );
}

export default App;
