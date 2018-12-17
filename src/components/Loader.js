// components
import React, { components } from 'react'


// style
import '../css/index.css'


class PreLoader extends components{
    render(){
        return(
            
             <div className="preloader" >
                 <h1 className="loader" >
                 <span>L</span>
                 <span>o</span>
                 <span>a</span>
                 <span>d</span>
                 <span>i</span>
                 <span>n</span>
                 <span>g</span>
                 </h1>
             </div>
        )
    }
}

export default PreLoader
