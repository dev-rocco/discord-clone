import ServerIcon from "../../res/serverph.jpeg";

export default function ServerBtn(props) {
    return (
        <div>
            <img src={ServerIcon} alt={props.name} className="server-btn-icon">
                <div className="server-btn-ind-semi"></div>
            </img>
        </div>
    );
}