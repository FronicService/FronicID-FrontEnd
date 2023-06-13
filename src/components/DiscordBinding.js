import React from 'react';
import '../css/spinner.css'
import Logo from "./auth/Logo";
import Register from "./Register";
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import Login from "./Login";
import Mail from "./auth/Mail";

function Auth() {
    const routeParams = useParams();

    if (routeParams["BindType"] === "register") {
        // Login
        // ... Go to lk
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