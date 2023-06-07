import React from 'react';
import id from '../img/id.svg'
import show from '../img/show.svg'
import hide from '../img/hide.svg'
import discord from '../img/discord-icon.svg'
import google from '../img/google-icon.svg'
import axios, {Axios} from "axios";
import async from "async";

async function loginTry(event) {
    event.preventDefault();
    serverDied.current.style.display = "none";

    try {
        const response = await fetch('http://91.210.170.142:5000/api/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login: event.target.username.value, password: event.target.password.value })
        });
        const data = await response.json();

        if (!response.ok) {
            serverDied.current.style.display = "block";
            if (data != null) {

                serverDied.current.innerHTML = data.message;

                data.errors.forEach(i => {
                    if (i.path === "password") {
                        event.target.password.parentElement.style.borderColor = "rgba(255, 0, 0, 0.7)";
                        event.target.password.parentElement.style.boxShadow = "0 0 3px 0 rgba(255, 0, 0, 0.5) inset, 0 0 3px 0 rgba(255, 0, 0, 0.5)";
                    } else if (i.path === "login") {
                        event.target.username.parentElement.style.borderColor = "rgba(255, 0, 0, 0.7)";
                        event.target.username.parentElement.style.boxShadow = "0 0 3px 0 rgba(255, 0, 0, 0.5) inset, 0 0 3px 0 rgba(255, 0, 0, 0.5)";
                    }
                })

            } else {
                serverDied.current.innerHTML = "Сервер не отвечает.. Повторите попытку позже";
            }
        } else {
            // После входа
            serverDied.current.innerHTML = "Вы вошли!";
            serverDied.current.style.display = "block";
        }
    } catch (e) {
        serverDied.current.style.display = "block";
        serverDied.current.innerHTML = "Сервер не отвечает.. Повторите попытку позже";
    }

}

let serverDied = null;
function Login() {
    let [showPassword, setPasswordState] = React.useState(false);

    const login = loginTry.bind(this);
    serverDied = React.useRef(null);

    return (
      <div className={"h-full container-fluid"}>
        <div className={"h-full justify-center row"}>
            <div className={"py-5 flex"}>
                <div className={"card wey-auto w-full overflow-hidden mt-auto mb-auto"}>
                    <div className={"flex items-center card-header"}>
                        <a href="https://id.fronic.ru" target="_blank">
                            <div className={"flex items-center"}>
                                <h5 className={"logo"}>Fronic</h5>
                                <img src={id} alt={"id"}/>
                            </div>
                        </a>
                        <svg className={"mx-3"} width="1" height="31" viewBox="0 0 1 31" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect width="1" height="31" fill="#82817D"></rect>
                        </svg>
                        <p className={"mb-0 leading-tight text-sm text-stone-600 font-normal"}> Единый аккаунт для одной экосистемы <br/> и бла бла бла </p>
                    </div>
                    <div className={"card-body mt-5"}>
                        <h5 className={"uppercase mb-4 font-semibold text-2xl"}>
                            Вход в аккаунт
                        </h5>

                        <div className={""}>
                            <div>
                                <form onSubmit={login}>
                                    <div className="text-center mb-3" role="alert" style={{display: "none"}} ref={serverDied}>
                                        Сервер не отвечает.. Повторите попытку позже
                                    </div>
                                    <div className="input-group mb-3 w-full flex">
                                        <input type="text" className="form-control w-full ease-in duration-150 opacity-80" placeholder="Почта или логин"
                                               aria-label="Почта или логин" name={"username"} onFocus={(event) => event.target.parentElement.removeAttribute('style')}/>
                                    </div>
                                    <div className="input-group w-full flex mb-0.5">
                                        <input type={showPassword ? "text" : "password"} className="form-control w-11/12 ease-in-out duration-150 opacity-80" placeholder="Пароль"
                                               aria-label="Пароль" name={"password"} onFocus={(event) => event.target.parentElement.removeAttribute('style')}/>
                                            <button className="btn btn-outline-secondary w-1/12" type="button" onClick={() => {setPasswordState(showPassword => !showPassword)}}
                                                    id="button-addon2"><img className={"w-3/5 h-3/5 ml-2"} src={showPassword ? hide : show} alt={"show"}/>
                                            </button>
                                    </div>
                                    <a href={"вы нашли мышку сасиску"} className={"opacity-90 hover:opacity-100 font-normal font-bold"} style={{color: "var(--secondary-light)"}}>Забыли пароль?</a>

                                    <button style={{background: "var(--base-gradient)"}} className="mt-4 btn primary-button w-full rounded-lg p-2 text-white uppercase font-bold ease-in duration-100">Войти</button>

                                    <div className={"w-full h-1 bg-gray-100 rounded-lg my-4"}/>

                                    <div className={""}>
                                        <a href="https://id.fronic.ru/"
                                           className="btn flex mb-2 ml-0 items-center justify-center btn primary-button w-full rounded-lg p-2 text-white ease-in duration-100 h-12" style={{background: "#677cee"}}>
                                            <img src={discord}
                                                 className="mr-2 w-5 h-5" alt={"discord"}/>
                                                Войти с помощью Discord
                                        </a>
                                        <a href="https://id.fronic.ru/"
                                           className="btn flex mb-2 ml-0 items-center justify-center btn primary-button w-full rounded-lg p-2 text-gray-700 ease-in duration-100 border-2 border-gray-300" style={{background: "white"}}>
                                            <img src={google}
                                                 className="mr-2 w-7 h-7" alt={"discord"}/>
                                            Войти с помощью Google
                                        </a>
                                    </div>

                                    <p className="text-sm text-center mt-10 mb-0">
                                        Нет аккаунта?
                                        <a className="text-warning ml-3 hover:underline" id="create-account-button"
                                           href="мышка" style={{color: "var(--warning-light)"}}>Создать</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Login