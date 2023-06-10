import React from "react";
import id from "../../img/id.svg";

class Logo extends React.Component {
    render() {
        return (
            <div className={"flex max-sm:flex-col items-center card-header max-sm:pb-0"}>
                <a href="/" target="_blank" rel="noreferrer">
                    <div className={"flex items-center"}>
                        <h5 className={"logo"}>Fronic</h5>
                        <img src={id} alt={"id"}/>
                    </div>
                </a>
                <svg className={"mx-3 max-sm:hidden"} width="1" height="31" viewBox="0 0 1 31" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <rect width="1" height="31" fill="#82817D"></rect>
                </svg>
                <div className={"w-full h-1 bg-gray-100 rounded-lg my-2 sm:hidden"}/>
                <p className={"mb-0 leading-tight text-sm text-stone-600 font-normal max-sm:text-center max-sm:font-medium"}> Единый аккаунт для одной экосистемы</p>
            </div>
        )
    }
}

export default Logo;