import React from 'react';
import Cookies from "js-cookie"
import {Navigate} from "react-router-dom";
import UserData from "./debug/UserData";

function get_data() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://id.api.fronic.ru/api/user/control/?user_auth="+Cookies.get("user_auth"), false );
    xmlHttp.send( null );

    return JSON.parse(xmlHttp.responseText);
}

class Cabinet extends React.Component {
    render() {
        let response = get_data().user;

        if (!Cookies.get("user_auth")) {
           return <Navigate to={"/"} />;
        }

        return (
            <div>
                Этот кабинет просто имба!
                <br/>
                    <img height={100} width={100} alt={"avatar"} src={"https://id.api.fronic.ru/"+response.avatar_url} />
                <br/>
                <div className={"flex gap-5"}>
                    {
                        Object.entries(response).map(data => {
                            return <UserData _key={data[0]} _value={data[1]} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Cabinet