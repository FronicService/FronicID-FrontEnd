import React from 'react';


class Admin extends React.Component {
    render() {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", 'https://id.api.fronic.ru/api/user/auth/signin', false );
        xmlHttp.send( null );
        console.log(xmlHttp.responseText)
        return (
            <>
                {xmlHttp.responseText}
            </>
        )
    }
}

export default Admin