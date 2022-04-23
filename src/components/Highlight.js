import React from 'react';
import '../index.css'

class Hightlight extends React.Component{
    
    render(props){
        return(
        <div className={this.props.myStyle}>
            <p className = "statement">Counter Value : {this.props.count}</p>
        </div>
        );
    }
}

export default Hightlight;