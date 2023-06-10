import React from 'react';
import show from '../img/show.svg'
import hide from '../img/hide.svg'
import CreateAccountQuestion from "./auth/CreateAccountQuestion";
import LoginWith from "./auth/LoginWith";
import ForgotPassword from "./auth/ForgotPassword";
import {authTry, confirm} from "./Auth"
import '../css/spinner.css'
import ResponseMessage from "./auth/ResponseMessage";
import Line from "./auth/Line";

function Login() {
    let [showPassword, setPasswordState] = React.useState(false);

    const data = {
        login: "123",
        password: "123"
    }

    const login = authTry.bind(this, data);

    return (
<>
    <h5 className={"uppercase mb-4 font-semibold text-2xl"}>
        Вход в аккаунт
    </h5>

    <form onSubmit={login}>
        <ResponseMessage />
        <div className="input-group mb-3 w-full flex">
            <input type="text" className="form-control w-full ease-in duration-150 opacity-80" placeholder="Почта или логин"
                   aria-label="Почта или логин" name={"username"} onFocus={(event) => event.target.parentElement.removeAttribute('style')}/>
        </div>
        <div className="input-group w-full flex mb-0.5">
            <input type={showPassword ? "text" : "password"} className="form-control w-11/12 ease-in-out duration-150 opacity-80" placeholder="Пароль"
                   aria-label="Пароль" name={"password"} onFocus={(event) => event.target.parentElement.removeAttribute('style')}/>
            <button className="btn btn-outline-secondary w-1/12 max-sm:w-8 flex items-center justify-center" type="button" onClick={() => {setPasswordState(showPassword => !showPassword)}}
                    id="button-addon2"><img className={"w-5 h-5"} src={showPassword ? hide : show} alt={"show"}/>
            </button>
        </div>
        <ForgotPassword />

        <button style={{background: "var(--base-gradient)"}} className="h-12 mt-4 btn primary-button w-full rounded-lg p-2 text-white uppercase font-bold ease-in duration-100 disabled:opacity-50" ref={confirm}>
            <p>Войти</p>
            <div className="lds-ellipsis" role="status" style={{display: "none"}}><div/><div/><div/></div>
        </button>

        <Line />

        <LoginWith />

        <CreateAccountQuestion />
    </form>
</>
    )
}

export default Login;