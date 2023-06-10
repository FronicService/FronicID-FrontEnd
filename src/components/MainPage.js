import React from 'react';

function MainPage() {

    return (
        <div className={"p-5"}>
            А нету тут нифига ещё.
            <br/>
            <a href={"/auth"} className={"text-blue-500 hover:text-blue-700 ease-in duration-100"}>/auth</a>
        </div>
    )
}

export default MainPage