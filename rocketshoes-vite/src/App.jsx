import Router from "./router/Router";
import { GlobalStyle } from "./css/global";
import GlobalState from "./globalState/GlobalState";


export default function App() {
    return (
        <GlobalState>
            <Router/>
            <GlobalStyle/>
        </GlobalState>
    );
    }