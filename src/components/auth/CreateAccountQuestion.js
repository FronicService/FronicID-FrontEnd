import React from "react";

class CreateAccountQuestion extends React.Component {
    render() {
        return (
            <p className="text-sm text-center mt-10 mb-0">
                Нет аккаунта?
                <a className="text-warning ml-3 hover:underline" id="create-account-button"
                   href="http://Redirect.To.Register" style={{color: "var(--warning-light)"}}>Создать</a>
            </p>
        )
    }
}

export default CreateAccountQuestion;