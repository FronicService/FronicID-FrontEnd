import React from 'react';
import '../css/spinner.css'
import Logo from "./auth/Logo";
import Register from "./Register";
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import Login from "./Login";
import Mail from "./auth/Mail";
import DiscordBinding from "./DiscordBinding";

export async function authTry(data_, url, redirect, event) {
    event.preventDefault();
    let data = {};
    Object.keys(data_).forEach(i => {
        Object.assign(data, { [i]: data_[i].current.value})
    })
    confirm.current.disabled = true;
    confirm.current.children[0].style.display = "none";
    confirm.current.children[1].style.display = "inline-block";
    
    serverDied.current.style.display = "none";

    const sendBody = JSON.stringify(data);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: sendBody
        });
        const data = await response.json();

        if (!response.ok) {
            serverDied.current.style.display = "block";
            if (data != null) {

                confirm.current.disabled = false;
                serverDied.current.innerHTML = data.message;
                confirm.current.children[1].style.display = "none";
                confirm.current.children[0].style.display = "inline-block";

                if (data.errors != null) {
                    data.errors.forEach(i => {
                        Object.keys(data_).forEach(ii => {
                            if (i.path === ii) {
                                data_[ii].current.parentElement.style.borderColor = "rgba(255, 0, 0, 0.7)";
                                data_[ii].current.parentElement.style.boxShadow = "0 0 3px 0 rgba(255, 0, 0, 0.5) inset, 0 0 3px 0 rgba(255, 0, 0, 0.5)";
                            }
                        })
                    })
                }
            } else {
                serverDied.current.innerHTML = "Сервер не отвечает.. Повторите попытку позже";
                confirm.current.children[1].style.display = "none";
                confirm.current.children[0].style.display = "inline-block";
                confirm.current.disabled = false;
            }
        } else {
            // После входа
            serverDied.current.innerHTML = "УСПЕШНО!";
            serverDied.current.style.display = "block";
            confirm.current.children[1].style.display = "none";
            confirm.current.children[0].style.display = "inline-block";
            confirm.current.disabled = false;
        }
    } catch (e) {
        setTimeout(() => {
            serverDied.current.style.display = "block";
            confirm.current.children[1].style.display = "none";
            confirm.current.children[0].style.display = "inline-block";
            serverDied.current.innerHTML = "Сервер не отвечает.. Повторите попытку позже";
            confirm.current.disabled = false;
        }, 1000);

    }
}

export let serverDied = React.createContext(React.createRef(null));
export let confirm = React.createContext(React.createRef(null));
function Auth() {
    const routeParams = useParams();
    if (Object.keys(routeParams).length === 0) {
        return (
            <Routes>
                <Route index element={<Navigate to={"signin"}/> }/>
            </Routes>
        )
    }

    const getDiscord_URL = new XMLHttpRequest();
    getDiscord_URL.open("GET", "https://id.api.fronic.ru/api/auth/discord/link", false)
    getDiscord_URL.send(null)
    return (
        <>
            <div className={"h-full container-fluid"}>
                <div className={"h-full justify-center row"}>
                    <div className={"py-5 max-sm:p-0 flex xl:3/12 xl:w-4/12 lg:w-5/12 md:w-7/12 sm:w-11/12"}>
                        <div className={"card wey-auto w-full overflow-hidden mt-auto mb-auto max-sm:mt-16"}>
                            <Logo />
                            <div className={"card-body mt-5 max-sm:mt-0"}>
                                {routeParams["AuthType"] === "signin" ? <Login /> : null}
                                {routeParams["AuthType"] === "signup" ? <Register /> : null}
                                {routeParams["AuthType"] === "mail" ? <Mail /> : null}
                                {routeParams["AuthType"] === "discord" ? <DiscordBinding /> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth