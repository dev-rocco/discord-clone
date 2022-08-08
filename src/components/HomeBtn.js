import HomeIcon from "../res/home.jpeg"

export default function HomeBtn() {
    return (
        <div>
            <div className="server-btn-ind-full"></div>
            <img src={HomeIcon} alt="Server Icon" className="server-btn-icon server-btn-icon-active" />
        </div>
    );
}