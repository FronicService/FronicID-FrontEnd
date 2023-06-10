import React from "react";
import {serverDied} from "../Auth";

class ResponseMessage extends React.Component {
    render() {

        return (
            <div className="text-center mb-3" role="alert" style={{display: "none"}} ref={serverDied}>
                Сервер не отвечает.. Повторите попытку позже
            </div>
        )
    }
}

export default ResponseMessage;