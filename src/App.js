import React from 'react';
import Auth from "./components/Auth";
import {Routes, Route} from "react-router-dom";
import MainPage from "./components/MainPage";
import Cabinet from "./components/Cabinet";
import Admin from "./components/Admin";

class App extends React.Component {
    render() {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", 'https://id.api.fronic.ru/api/user/session/', false );
        xmlHttp.send( null );
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