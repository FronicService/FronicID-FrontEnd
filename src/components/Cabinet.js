import React from 'react';
import Cookies from "js-cookie"
import {Navigate} from "react-router-dom";
import async from "async";


async function register() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "user_auth": Cookies.get("user_auth")
    });

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const response = await fetch("https://id.api.fronic.ru/api/user/control", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: requestOptions
    });
    const data = await response.json();
    console.log(data)
}

function Cabinet() {
    if (!Cookies.get("user_auth")) {
        return <Navigate to={"/"} />;
    }
    register();

    return (
        <div>
            Этот кабинет просто имба!
            <br/>

        </div>
    )
}

export default Cabinet