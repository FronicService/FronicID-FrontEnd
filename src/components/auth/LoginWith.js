import React from "react";
import discord from "../../img/discord-icon.svg";
import google from "../../img/google-icon.svg";
import mail from "../../img/mail-icon.svg";

class LoginWith extends React.Component {
    render() {
        return (
            <div className={""}>
                <a href="https://id.fronic.ru/"
                   className="btn flex mb-2 ml-0 items-center justify-center btn primary-button w-full rounded-lg p-2 text-white ease-in duration-100 h-12" style={{background: "#677cee"}}>
                    <img src={discord}
                         className="mr-2 w-5 h-5" alt={"discord"}/>
                    С помощью Discord
                </a>
                <a href="https://id.fronic.ru/"
                   className="btn flex mb-2 ml-0 items-center justify-center btn primary-button w-full rounded-lg p-2 text-gray-700 ease-in duration-100 border-2 border-gray-300 bg-white hover:bg-gray-200">
                    <img src={google}
                         className="mr-2 w-7 h-7" alt={"discord"}/>
                    С помощью Google
                </a>
                <a href="https://id.fronic.ru/"
                   className="btn flex mb-2 ml-0 items-center justify-center btn primary-button w-full rounded-lg p-2 text-gray-700 ease-in duration-100 border-2 border-gray-300 bg-white hover:bg-gray-200">
                    <img src={mail}
                         className="mr-2 w-7 h-7" alt={"discord"}/>
                    С помощью Почты
                </a>
            </div>
        )
    }
}

export default LoginWith;