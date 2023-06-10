import React from 'react';
import LoginWith from "./auth/LoginWith";
import '../css/spinner.css'
import ResponseMessage from "./auth/ResponseMessage";
import LoginQuestion from "./auth/LoginQuestion";

function Register() {
    return (
<>
    <h5 className={"uppercase mb-4 font-semibolsd text-2xl"}>
        Cоздать аккаунт
    </h5>

    <form>
        <ResponseMessage />

        <LoginWith />

        <LoginQuestion />
    </form>
</>
    )
}

export default Register;