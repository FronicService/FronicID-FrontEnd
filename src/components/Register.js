import React from 'react';
import CreateAccountQuestion from "./auth/CreateAccountQuestion";
import LoginWith from "./auth/LoginWith";
import '../css/spinner.css'
import ResponseMessage from "./auth/ResponseMessage";

function Register() {
    return (
<>
    <h5 className={"uppercase mb-4 font-semibold text-2xl"}>
        Cоздать аккаунт
    </h5>

    <form>
        <ResponseMessage />

        <LoginWith />

        <CreateAccountQuestion />
    </form>
</>
    )
}

export default Register;