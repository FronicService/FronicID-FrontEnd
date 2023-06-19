import React from 'react';


class Admin extends React.Component {
    render() {
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", 'https://id.api.fronic.ru/api/user/session/', false );
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