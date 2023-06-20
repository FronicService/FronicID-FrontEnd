import React from 'react';
import '../css/spinner.css'
import {useParams} from "react-router-dom";
import * as querystring from "querystring";

function Auth(props) {
    const routeParams = useParams();

    if (routeParams["BindType"] === "signin") {
        console.log(querystring.parse(props.location.search))
    }
    else if (routeParams["BindType"] === "register") {

    }
    else if (routeParams["BindType"] === "bind") {
        // Bind
        // ... Go to lk and send BINDED!
    }

    return (
        <>

        </>
    )
}

export default Auth