// Dependecies
import React, { Component } from 'react';
//styles
import '../../css/index.css' 
import Posts from'./help'
import Footer from '../Footer';



class Blog extends Component {
  render() {
    return (
    
        <div className="content-blog">
            <Posts/>
            
        <Footer/>
        </div>
      );
   
    
  
  }
}

export default Blog;
