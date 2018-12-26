//dependecies

import React, { Component } from 'react';

import '../../index.css'
import img1 from '../../assets/imagen/fondos/img1.jpg'
import food1 from '../../assets/imagen/fondos/food1.jpg'
import rest1 from '../../assets/imagen/fondos/rest1.jpg'
import rest2 from '../../assets/imagen/fondos/rest2.jpg'
import des1 from '../../assets/imagen/des1.jpg'
import cocina from '../../assets/imagen/fondos/cocina.jpg'
import Footer from '../Footer';



class Service extends Component{
    constructor(){
        super();
        this.state=({
            db:[]
        })
        this.dataBase =this.dataBase.bind(this)
    }


dataBase(){
    fetch('http://localhost/Api/dbcomentarios')
    .then(response=>response.json())
    .then(response=>{
        
    console.log(response);
    })
}  

    render(){
        return(
            <div className="Service" >
           <div className="ctn-services" >
             <div className="portada-service" >
               <h1>Paradise</h1>
               <p> hola aca podras encontrar todo lo que necesites para ti y tu familia o invitados reuniones etc. <br/>
               ven y pasa un maravilloso momneto  con tus amigos y familiares.
               </p>
             </div> 
          </div>

           <div className="service2" >
               <h1> Servicios</h1>
               <h2>obten descientos y promociones<br/>
               en nuestra gran seleccion de eventos</h2>
           </div>
           <div  className="service3" >   

              <div className="service-img" >
              <img src={food1}/>
              </div>
              <div className="service-img" >
              <img src={rest1}/>
              </div>
              <div className="service-img" >
              <img src={rest2}/>
              </div>
              <div className="service-img" >
              <img src={des1}/>

              </div>
           </div>

           <div className="service-4" >
               <h2> NUESTRO EQUIPO</h2>
               <h4> tenemos el mejor personal a su disposicion <br/>para satisfaser todas sus necesidades </h4>
               <div className="serv-img">
               <img src={cocina}/>
            </div>  
           </div>
                <Footer/>
        
            </div>
        );
    }
}

export default Service;
