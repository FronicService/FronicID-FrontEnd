import React from 'react';
import '../css/spinner.css'
import ResponseMessage from "./auth/ResponseMessage";
import LoginQuestion from "./auth/LoginQuestion";
import RegisterWith from "./auth/RegisterWith";

function Register() {
    return (
<>
    <h5 className={"uppercase mb-4 font-semibold text-2xl"}>
        Cоздать аккаунт
    </h5>

    <form>
        <ResponseMessage />

        <RegisterWith />

        <LoginQuestion />
    </form>
</>
    )
}

export default Register;