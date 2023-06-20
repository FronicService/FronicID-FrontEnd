import React from 'react';

function Footer() {
    return (
        <div className={"p-5 bg-[#242120] text-white"}>
            А нету тут нифига ещё.
            <br/>
            <a href={"/auth"} className={"text-blue-500 hover:text-blue-700 ease-in duration-100"}>/auth</a>
            <br/>
            <a href={"/cabinet"} className={"text-blue-500 hover:text-blue-700 ease-in duration-100"}>/cabinet</a>
        </div>
    )
}

export default Footer