//dependecies

import React, { Component } from 'react';
// styles
import '../../css/index.css' 

class About extends Component{
   constructor(...props){
       super(...props)
       this.state ={
           loading: true
       }

       this.handleBotom = this.handleBotom.bind(this)
   }
   handleBotom(){
    let btn = document.getElementById('btn');

    window.onscroll = ()=>{
      if(window.pageYOffset >= 400){
        btn.style.display = 'block';
      } else{
        btn.style.display = 'none';
      }
    };
   //   falta arreglas la velocidad de movimiento
    btn.onclick = ()=>{
  
    let i = 0,
        t = 300;
  
      if(i < t){
        btn.style.top = i;
        i++;
        setTimeout( function() { window.scrollTo(0,50);}, 5 )
      }
  
      // setTimeout( function(){ window.scrollTo(0, 100);}, 1000);
    }
    
   }
   
    render(){
        return (
            <div className="body" >
    
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>

            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
             
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1><h1> hola pagina about </h1>
            <input type="submit" id="btn" onClick={ this.handleBotom}></input>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1><h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1><h1> hola pagina about </h1><h1> hola pagina about </h1>
            <h1> hola pagina about </h1><h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1>
            <h1> hola pagina about </h1><h1> hola pagina about </h1>
            <h1> hola pagina about </h1><h1> hola pagina about </h1>

            
            
               <div className="ctn" ></div>
            </div>
        );
    }
}

export default About;
