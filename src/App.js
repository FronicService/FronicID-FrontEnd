import React from 'react';
import Auth from "./components/Auth";
import {Routes, Route} from "react-router-dom";
import MainPage from "./components/MainPage";
import Cabinet from "./components/Cabinet";
import Admin from "./components/Admin";
import Cookies from "js-cookie"

class App extends React.Component {
    render() {
        const xmlHttp = new XMLHttpRequest();
        try {
            xmlHttp.open( "GET", 'https://id.api.fronic.ru/api/user/session/?session_id='+Cookies.get("session_id"), false );
            xmlHttp.send( null );
        } catch (e) { console.log("ПИЗДЕЦ СЕССИИ НЕ РАБОТАЮТ!!!"); }
        finally {
            const response_sid = JSON.parse(xmlHttp.responseText)["session_id"];
            if (response_sid != null) Cookies.set("session_id", response_sid);
        }
        return (
            <Routes>
                <Route path={"/"}>
                    <Route index element={<MainPage />}/>
                    <Route path={"/auth"} element={<Auth />}/>
                    <Route path={"/auth/:AuthType"} element={<Auth />}/>
                    <Route path={"/auth/:AuthType/:BindType"} element={<Auth />}/>
                </Route>
                <Route path={"/cabinet"}>
                    <Route index element={<Cabinet />}/>
                </Route>
                <Route path={"/admin"}>
                    <Route index element={<Admin />}/>
                </Route>
            </Routes>
        )
    }
}

export default App