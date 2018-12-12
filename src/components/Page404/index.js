//dependecies

import React, { Component } from 'react';
//styles
import '../../css/index.css' 


class Page404 extends Component{
    constructor(...props){
        super(...props)
        this.state = {
            loading: true
        }

        this.handleCanvas = this.handleCanvas.bind(this)
    }

handleCanvas(){
    (function() {
        function ready(fn) {
          if (document.readyState !== 'loading'){
            fn();
          } else {
            document.addEventListener('DOMContentLoaded', fn);
          }
        }
        
        function makeSnow(el) {
          var ctx = el.getContext('2d');
          var width = 0;
          var height = 0;
          var particles = [];
          
          var Particle = function() {
            this.x = this.y = this.dx = this.dy = 0;
            this.reset();
          }
          
          Particle.prototype.reset = function() {
            this.y = Math.random() * height;
            this.x = Math.random() * width;
            this.dx = (Math.random() * 1) - 0.5;
            this.dy = (Math.random() * 0.5) + 0.5;
          }
          
          function createParticles(count) {
            if (count !== particles.length) {
              particles = [];
              for (var i = 0; i < count; i++) {
                particles.push(new Particle());
              }
            }
          }
              
          function onResize() {
            width = window.innerWidth;
            height = window.innerHeight;
            el.width = width;
            el.height = height;
            
            createParticles((width * height) / 10000);
          }
          
          function updateParticles() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#f6f9fa';
            
            particles.forEach(function(particle) {
              particle.y += particle.dy;
              particle.x += particle.dx;
              
              if (particle.y > height) {
                particle.y = 0;
              }
              
              if (particle.x > width) {
                particle.reset();
                particle.y = 0;
              }
              
              ctx.beginPath();
              ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2, false);
              ctx.fill();
            });
            
            window.requestAnimationFrame(updateParticles);
          }
          
          onResize();
          updateParticles();
          
          window.addEventListener('resize', onResize);
        }
        
        ready(function() {
          var canvas = document.getElementById('snow');
          makeSnow(canvas);
        });
      })();
}

    render(){
        return(
            <div className="about" >
            
            <div className="content"  onClick={this.handleCanvas} >
                <canvas className="snow" id="snow"></canvas>
                <div className="main-text">
                  <h1>Error :( <br/>That page has gone missing.</h1><a className="home-link" href="/">Hitch a ride back home.</a>
                </div>
                <div className="ground">
                  <div className="mound"> 
                    <div className="mound_text">404</div>
                    <div className="mound_spade"></div>
                  </div>
                </div>
              </div>

            </div>
        );
    }
}

export default Page404;
