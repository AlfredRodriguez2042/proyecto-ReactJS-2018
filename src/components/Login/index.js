import React, { Component } from 'react'
import { login, resetPassword } from '../data/Auth'
//styles
import '../../css/index.css' 
import user from '../../assets/imagen/login.jpg';



export default class Login extends Component {
  constructor(...props) {
    super(...props)

    this.state = { loginMessage: null }

    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.setMessage = this.setMessage.bind(this)
    this.resetPassword = this.resetPassword.bind(this)
    this.inputOnclick = this.inputOnclick.bind(this)
  }

  handleOnSubmit(e) {
    e.preventDefault()
    login( this.email.value, this.password.value )
      .catch( err => this.setState( this.setMessage(`Usuario o Password incorrectos: ${err.message}`) ) )
  }

  setMessage(err) {
    return { loginMessage: err }
  }

  resetPassword() {
    resetPassword( this.email.value )
      .then( () => this.setState( this.setMessage(`Se ha enviado un correo electronico a  <b>${this.email.value}</b> para reestablecer tu contraseña.`) )  )
      .catch( err => this.setState( this.setMessage(`El email ${this.email.value} no se encuentra registrado`) ) )
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
      <div className="form">
      <div className="login-box" > 
       <img src={user} alt="user" className="user" />
				<h1>Login</h1>
        <form className="formulario" onSubmit={this.handleOnSubmit}>
        <div className="frm" >
          <input type="email" id="email" onChange={this.inputOnclick} className="input" ref={ email => this.email = email }  />
          <label for="email" className="lbl"> Email</label>

          <input type="password" id="password" className="input"  ref={ password => this.password = password } />
          <label for="password" className="lbl">Password</label>
          </div>
          {
            this.state.loginMessage &&
            <div className="u-error">
          
                Error:&nbsp;&nbsp;{this.state.loginMessage}&nbsp;
                <p onClick={this.resetPassword} className="alert-link">¿Olvidaste tu contraseña?</p>
              
            </div>
          }
          <input type="submit" className="btn__submit" value="Login" />
        </form>
        </div>
        </div>
			</article>
		)
	}
}