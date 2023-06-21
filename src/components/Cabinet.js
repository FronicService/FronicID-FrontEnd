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
        const cabinet_data = React.createRef(null);
        let response = get_data();
        console.log(response.user)

        if (!Cookies.get("user_auth")) {
           return <Navigate to={"/"} />;
        }
        return (
            <div>
                Этот кабинет просто имба!
                <br/>
                <img height={100} width={100} alt={"avatar"} src={"https://id.api.fronic.ru/"+response.user.avatar_url} />
                <br/>
                <div ref={cabinet_data} className={"flex gap-5"}>
                    <UserData _key={"id"} _value={response.user.id} />
                    <UserData _key={"discord_id"} _value={response.user.discord_id} />
                    <UserData _key={"name"} _value={response.user.name} />
                    <UserData _key={"email"} _value={response.user.email} />
                    <UserData _key={"lang"} _value={response.user.lang} />
                    <UserData _key={"createdAt"} _value={response.user.createdAt} />
                    <UserData _key={"updatedAt"} _value={response.user.updatedAt} />
                </div>
            </div>
        )
    }
}

export default Cabinet