//dependecies

import React, { Component } from 'react';
//styles
import '../../css/index.css' 
//assets
 import video from '../../assets/video/cheff.mp4';

class Home extends Component{
    render(){
        return(

            <div className="home" >
            <div className="chrismas" id="chrismas" >

            </div>
                 

            <div className="portada" >
            <video className="video" src={video} autoPlay >
                
            </video>
            </div>

             {/* NIVEL 2 */}

            <div className="content-home" >
            <div className="mask" >
            <div className="mask-center" >
            <h1 className="text-title" > BIENVENIDOS A LA COCINA </h1>
            <h2 className="text-sub" > vive una nueva experiencia, atrevete a provar algo nuevo <br></br> acompañanos en esta aventura y se parte de algo increible <br></br>      descubre la magia <br></br>  </h2>
        
             <button  className="home-btn"> Ver mas detalles</button>
            </div>
            </div>
            </div>
              
              {/* NIVEL 3 */}
              <div className="ctn-home" >
            <div className="mask-2" >
            <div>
                <h2>ven y disfruta en familia</h2>
            </div>
            </div>

            </div>
            
            </div>
        );
    }
}

export default Home;
