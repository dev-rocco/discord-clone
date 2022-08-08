import ServerIcon from "../../res/serverph.jpeg";

export default function ServerBtn() {
    return (
        <div>
            <div className="server-btn-ind-semi"></div>
            <img src={ServerIcon} alt="Server Icon" className="server-btn-icon" />
        </div>
    );
}