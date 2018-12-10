//dependecies

import React, { Component } from 'react';
//styles
import '../../css/index.css' 

class Home extends Component{
    render(){
        return(
            <div className="about" >
            <h1>hola pagina about</h1>
            <div className="padre" >
                <div className="red" ></div>
                <div className="blue" ></div>
            </div>
            </div>
        );
    }
}

export default Home;
