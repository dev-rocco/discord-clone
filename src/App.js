import "./App.css";
import ServerBtn from "./components/serverbar/ServerBtn";
import ServerBtnSep from "./components/serverbar/ServerBtnSep";
import HomeBtn from "./components/serverbar/HomeBtn";

export default function App() {
    return (
        <div className="App">
            <div id="server-btn-div">
                <HomeBtn />
                <ServerBtnSep />
                <ServerBtn name={"yes"} />
                <ServerBtn />
                <ServerBtn />
                <ServerBtn />
                <ServerBtn />
                <ServerBtn />
            </div>
        </div>
    );
}