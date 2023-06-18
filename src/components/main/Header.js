import React from 'react';
import MiniLogo from "../MiniLogo";
import LoginIcon from "../../img/login.svg"

function Header() {

    return (
        <div className={"flex justify-center"}>
            <div className={"max-sm:w-full xl:w-10/12 lg:w-11/12 md:w-11/12 sm:w-full h-auto py-3 bg-gray-50 rounded-3xl mt-6 shadow-md flex px-5"}>
                <div className={"w-9/12 flex items-center"}>
                    <MiniLogo />
                    <nav className={"items-center text-lg font-medium ml-10 md:flex max-md:hidden"}>
                        <div><a href={"/"} className={"nav-a nav-a-selected"}>Главная</a></div>
                        <div><a href={"/"} className={"nav-a"}>О проекте</a></div>
                        <div><a href={"/"} className={"nav-a"}>Рецепт пельменей</a></div>
                        <div><a href={"/"} className={"nav-a"}>Дать денег</a></div>
                        <div><a href={"/"} className={"nav-a"}>РП С КРИСТАЛАМИ</a></div>
                    </nav>
                </div>
                <div className={"w-3/12 flex justify-end items-center"}>
                    <a className={"flex justify-center items-center rounded-xl bg-blue-500 opacity-90 hover:opacity-100 ease-in duration-100 px-12 py-3"} href={"auth/signin"}>
                        <img className={"w-6"} src={LoginIcon} alt={"LoginIcon"}/>
                        <h4 className={"text-white ml-1 text-lg"}>Войти</h4>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header