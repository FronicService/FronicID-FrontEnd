import React from 'react';
import Header from "./main/Header";
import Main from "./main/Main";
import Footer from "./main/Footer";

function MainPage() {

    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Main />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default MainPage