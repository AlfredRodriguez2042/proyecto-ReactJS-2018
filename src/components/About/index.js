//dependecies

import React, { Component } from 'react';
// styles
import '../../css/index.css' 
import Platos from '../../assets/imagen/chicken.jpg';
import Footer from '../Footer';

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
      
      <div className="banner platos">
      <div className="grid">
        <div className="banner__data">
          <h2 className="title-banner" >Los Platos De la temporada</h2>
          <p>Nuestra carta de primavera, es un homenaje a la diversidad de productos de esta temporada .<br/>De esta carta se desprenden una degustacion de sabores y tradiciones, para dar paso a nuestra propuesta gastronomica</p>
          <div className="btn-ghost">Ver mas detalles</div>
        </div>
        <div className="banner__caption"><i>"Gracias a todos por su gran aprovacion de nuestro menu"</i><br/>-Cocinero <br/><span>Johan Roca</span></div>
      </div>
    </div>

                       {/* postres */}
         <div className="postres banner">
      <div className="grid">
        <div className="banner__data">
          <h2 className="title-banner" >Los Postres De la temporada</h2>
          <p>Nuestra carta de primavera, incluye algunos postres de la region usando productos de temporada de alta calidad .<br/>De esta carta se desprenden una degustacion de sabores y tradiciones, para dar paso a nuestra propuesta gastronomica</p>
          <div className="btn-ghost">Ver mas detalles</div>
        </div>
        <div className="banner__caption"><i>"Gracias a todos por su gran aprovacion de nuestro menu"</i><br/>-Repostrero -Pastelero <br/><span>Jordi Roca</span></div>
      </div>
    </div>

                               {/* barra */}
       <div className="banner barra">
      <div className="grid">
        <div className="banner__data">
          <h2 className="title-banner" >Nuestra Barra</h2>
          <p>Nuestra barra es muy amplia y selectiva, trabajamos con variedad de vinos y licores d todas partes del mundo .<br/>Todos tus tragos favoritos en un solo lugar calido y acojedor</p>
          <div className="btn-ghost">Ver mas detalles</div>
        </div>
        <div className="banner__caption"><i>"Gracias a todos por su gran aprovacion de nuestro menu"</i><br/>-Bartender <br/><span>Carlos Garcia</span></div>
      </div>
    </div>
      
            <input type="submit" id="btn" onclick={this.handleBotom} /> 

            <Footer/>
               </div>
        );
    }
}

export default About;
