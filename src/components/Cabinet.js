import React from 'react';
import Cookies from "js-cookie"
import {Navigate} from "react-router-dom";
import axios from "axios";


function Cabinet() {
    if (!Cookies.get("user_auth")) {
        return <Navigate to={"/"} />;
    }

    let data = JSON.stringify({
        "user_auth": Cookies.get("user_auth")
    });

    axios.request({
        method: "get",
        maxBodyLength: Infinity,
        url: "https://id.api.fronic.ru/api/user/control",
        headers: {
            "Content-Type": "application/json",
            "user_auth": Cookies.get("user_auth")
        },
        data: data
    }).then(r => {console.log(r)})

    return (
        <div>
            Этот кабинет просто имба!
            <br/>

        </div>
    )
}

export default Cabinet