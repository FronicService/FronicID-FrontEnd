import React from "react";

class ForgotPassword extends React.Component {
    render() {
        return (
            <a href={"вы нашли мышку сасиску"} className={"opacity-90 hover:opacity-100 font-normal font-bold"} style={{color: "var(--secondary-light)"}}>Забыли пароль?</a>
        )
    }
}

export default ForgotPassword;