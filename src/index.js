import ReactDOM from "react-dom";

import Telas from "./components/Telas";

function App() {
    return (
        <>
            <Telas />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
