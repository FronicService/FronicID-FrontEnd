import React from "react";

class LoginQuestion extends React.Component {
    render() {
        return (
            <p className="text-sm text-center mt-10 mb-0">
                Уже есть аккаунт?
                <a className="text-warning ml-3 hover:underline" id="create-account-button"
                   href="signin" style={{color: "var(--warning-light)"}}>Войти</a>
            </p>
        )
    }
}

export default LoginQuestion;