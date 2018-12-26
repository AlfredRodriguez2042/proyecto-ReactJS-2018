import React, { Component } from 'react'
import { auth } from '../data/Auth'
//styles
import '../../css/index.css' 



export default class Register extends Component {
  constructor(...props) {
    super(...props)

    this.state = { loginMessage: null }

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.setMessage = this.setMessage.bind(this)
    this.inputOnclick = this.inputOnclick.bind(this)
  }

  handleOnSubmit(e) {
    e.preventDefault()
    auth( this.email.value, this.password.value )
      .catch( err => this.setState( this.setMessage( `Error: ${err.message}` ) ) )
  }

  setMessage(err) {
    return { loginMessage: err }
  }
  inputOnclick(){
    let inputs = document.getElementsByClassName("input");
for (let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("keyup", function(){
      if(this.value.length>=1) {
         this.nextElementSibling.classList.add("fijar"); 
      } else{
        this.nextElementSibling.classList.remove("fijar");
      }
    })
}
  }
	render() {
		return (
			<article className="Main-container">
      
      <div className="content-register2" >
				<h1>Registro de Usuarios</h1>
        <form className="formulario-register" onSubmit={this.handleOnSubmit}>
          <input type="email" id="email" className="imput" ref={ email => this.email = email }  /> 
          <label for="email" className="lbel">Email</label> <br/>
          <input type="password" id="password" className="imput" ref={ password => this.password = password } />
          <label for="password" className="lbel">Password</label> <br/>
          {
            this.state.loginMessage &&
            <div className="u-error">
              <p>
                Error:&nbsp;&nbsp;{this.state.loginMessage}
              </p>
            </div>
          }
          <input type="submit" className="btn-register" value="Registrar" />
        </form>
        </div>
        <div className="content-register" ></div>
        
			</article>
		)
	}
}