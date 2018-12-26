//dependecies

import React, { Component } from 'react';

import '../../index.css'
import Footer from '../Footer';

class Contact extends Component{
    render(){
        return(
            <div className="contact" >
             <div className="contact-nosotros">
                 <h1> 
                     NOSOTROS
                 </h1>

                 <h3> Somos una empresa pequeña, con una gran vision<br/> estamos en crecimiento constante.<br/> tenemos una gran trayectoria y contamos con espacios comodos para todos nuestros clientes </h3>
             </div>
             <div className="contact-vision"> 
                 <h1>Nuestra Vision</h1>
                 <h3> tenemos la vision de crecer y llegar a ser la mejor opcion para todos nuestros clientes. <br/>brindando un gran servicio a todos ellos  </h3>

             </div>
             <div  className="contact-mision">
                 <h1>Nuestra Mision</h1>
                 <h3>Tenemos la mision de brindar lo mejor a nuestros clientes. <br/> bindar un servico de calidad con ingredientes sanos y saludables.<br/>
                 A si tambien ayudar a nuestra comunidad con capacitacion constante.
                 </h3>
             </div>
            

            <Footer/>
            </div>
        );
    }
}

export default Contact;
