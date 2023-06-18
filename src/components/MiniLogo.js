import React from "react";
import id from "../img/id.svg";

class MiniLogo extends React.Component {
    render() {
        return (
            <>
                <a href="/" target="_blank" rel="noreferrer">
                    <div className={"flex items-center"}>
                        <h5 className={"logo"}>Fronic</h5>
                        <img src={id} alt={"id"}/>
                    </div>
                </a>
            </>
        )
    }
}

export default MiniLogo;