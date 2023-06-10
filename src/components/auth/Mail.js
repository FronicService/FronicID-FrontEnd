import React from 'react';
import {authTry, confirm} from "../Auth"
import '../../css/spinner.css'
import ResponseMessage from "./ResponseMessage";
import LoginQuestion from "./LoginQuestion";
import hide from "../../img/hide.svg";
import show from "../../img/show.svg";

function Mail() {
    let [showPassword, setPasswordState] = React.useState(false);

    const name = React.useRef(null);
    const mail = React.useRef(null);
    const password = React.useRef(null);

    const data = {
        name: name,
        email: mail,
        password: password
    }
    const register = authTry.bind(this, data, 'https://id.api.fronic.ru/api/auth/signup');
    return (
<>
    <h5 className={"uppercase mb-4 font-semibold text-2xl"}>
        Cоздать аккаунт
    </h5>

    <form onSubmit={register}>
        <ResponseMessage />
        <div className="input-group mb-3 w-full flex">
            <input ref={name} type="text" className="form-control w-full ease-in duration-150 opacity-80" placeholder="Имя"
                   aria-label="Имя" name={"username"} onFocus={(event) => event.target.parentElement.removeAttribute('style')}/>
        </div>
        <div className="input-group mb-3 w-full flex">
            <input ref={mail} type="text" className="form-control w-full ease-in duration-150 opacity-80" placeholder="Почта"
                   aria-label="Почта" name={"username"} onFocus={(event) => event.target.parentElement.removeAttribute('style')}/>
        </div>
        <div className="input-group w-full flex mb-0.5">
            <input ref={password} type={showPassword ? "text" : "password"} className="form-control w-11/12 ease-in-out duration-150 opacity-80" placeholder="Пароль"
                   aria-label="Пароль" name={"password"} onFocus={(event) => event.target.parentElement.removeAttribute('style')}/>
            <button className="btn btn-outline-secondary w-1/12 max-sm:w-8 flex items-center justify-center" type="button" onClick={() => {setPasswordState(showPassword => !showPassword)}}
                    id="button-addon2"><img className={"w-5 h-5"} src={showPassword ? hide : show} alt={"show"}/>
            </button>
        </div>

        <button style={{background: "var(--base-gradient)"}} className="h-12 mt-4 btn primary-button w-full rounded-lg p-2 text-white uppercase font-bold ease-in duration-100 disabled:opacity-50" ref={confirm}>
            <p>Подтвердить</p>
            <div className="lds-ellipsis" role="status" style={{display: "none"}}><div/><div/><div/></div>
        </button>

        <LoginQuestion/>
    </form>
</>
    )
}

export default Mail;