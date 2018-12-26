//dependecies

import React, { Component } from 'react';
//styles
import '../../css/index.css' 
//assets
 import video from '../../assets/video/cheff.mp4';
 import Footer from '../Footer'

class Home extends Component{
    render(){
        return(

            <div className="home" >
           

            <div className="portada" >
            <video className="video" src={video} autoPlay >
                
            </video>
            </div>

             {/* NIVEL 2 */}

            <div className="content-home" >
             <div className="ctn-center">
            <h1 className="text-title" > BIENVENIDOS A LA COCINA </h1>
            <h2 className="text-sub" > vive una nueva experiencia, atrevete a provar algo nuevo <br></br> acompañanos en esta aventura y se parte de algo increible <br></br>      descubre la magia <br></br>  </h2>
        
             <button  className="home-btn"> Ver mas detalles</button>
             </div>
            </div>

            <div className="ctn-medio"> <h1>VEN A DISFRUTAR NUESTRA AMPLIA CARTA <br></br> QUE TENEMOS PARA TI</h1> 
            <p> Todos los dias encontraras gran variedad de platos
                 </p>
                 <a className="btn">Click Me!!</a>
             </div>
              
              {/* NIVEL 3 */}
              <div className="ctn-home" >
            <div className="mask" >
            
                <h2>ven y disfruta en familia</h2>
            </div>
            

            </div>
            
            <Footer/>
            </div>
        
        );
    }
}

export default Home;
