import React from 'react';

class Loader extends React.Component{
    render(){
        return (
            <div className="flex">
                <div className = "loader"></div>
                <div ><p>Saving counter value</p></div>
            </div>
        )
    }
}

export default Loader;