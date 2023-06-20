import React from 'react';
import '../css/spinner.css'
import {Navigate, useLocation, useParams} from "react-router-dom";
import Cookies from "js-cookie"

function DiscordBinding(props) {
    const routeParams = useParams();
    const routeSearch = useLocation().search;

    if (routeParams["BindType"] === "signin") {
        const params = new URLSearchParams(routeSearch);
        Cookies.set("session_id", params.get("session_id"))
        Cookies.set("user_auth", params.get("user_auth"))
    }
    else if (routeParams["BindType"] === "register") {

    }
    else if (routeParams["BindType"] === "bind") {
        // Bind
        // ... Go to lk and send BINDED!
    }

    return (
        <>
            <Navigate to={"/cabinet"} />
        </>
    )
}

export default DiscordBinding