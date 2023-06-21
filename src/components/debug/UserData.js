import React from 'react';


class UserData extends React.Component {
    render() {
        return (
            <div className={'bg-gray-200 p-5'}>
                <h2 className={"font-bold text-blue-700"}>
                    {this.props._key}
                </h2>
                <h3 className={"text-blue-500 underline"}>
                    {this.props._value}
                </h3>
            </div>
        )
    }
}

export default UserData