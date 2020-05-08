// dependecies
import React, { Component } from "react"
import {
  Route,
  BrowserRouter as Router,
  Link,
  Redirect,
  Switch,
} from "react-router-dom"
// Componentes
import { firebaseAuth } from "./data/firebase"
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import Page404 from "./Page404"
import Register from "./Register"
import Service from "./Service"

import Blog from "./Blog"
import Contact from "./Contact"
import { logout } from "./data/Auth"
import "../index.css"
//import PreLoader from './Loader'

const PrivateRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authed === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
)

const PublicRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authed === false ? <Component {...props} /> : <Redirect to="/" />
    }
  />
)

class App extends Component {
  constructor(...props) {
    super(...props)

    this.state = {
      authed: false,
      loading: true,
    }

    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e) {
    //alert('click')
    if (e.target === document.getElementById("toggle")) {
      e.preventDefault()
    }

    document.getElementById("tuckedMenu").classList.toggle("custom-menu-tucked")
    document.getElementById("toggle").classList.toggle("x")
  }

  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          loading: false,
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeListener()
  }

  render() {
    return this.state.loading === true ? (
      <div className="preloader">
        <h1 className="loader">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </h1>
      </div>
    ) : (
      <Router>
        <div className="html">
          <header className="header">
            <div className="content-logo">
              <p className="ctn" id="toggle" onClick={this.handleOnClick}></p>
            </div>
            <div className="menu" id="tuckedMenu">
              <ul className="menu-list">
                <li className="menu-item">
                  <Link
                    to="/"
                    className="item-link"
                    onClick={this.handleOnClick}
                  >
                    Home
                  </Link>
                </li>

                <li className="menu-item">
                  <Link
                    to="/carta"
                    className="item-link"
                    onClick={this.handleOnClick}
                  >
                    Carta
                  </Link>
                </li>

                <li className="menu-item">
                  <Link
                    to="/contact"
                    className="item-link"
                    onClick={this.handleOnClick}
                  >
                    Contacto
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/service"
                    className="item-link"
                    onClick={this.handleOnClick}
                  >
                    Service
                  </Link>
                </li>
              </ul>

              <ul className="login-menu">
                <li className="menu-item">
                  <a className="item-link">Log In</a>
                  <ul className="faded">
                    {this.state.authed ? (
                      <div className="logout">
                        <li className="menu-item">
                          <Link
                            to="/blog"
                            className="item-link"
                            onClick={this.handleOnClick}
                          >
                            Blog
                          </Link>
                        </li>

                        <li className="menu-item">
                          <Link
                            to="/"
                            className="item-link"
                            onClick={() => {
                              logout()
                              this.setState({ authed: false })
                              this.handleOnClick()
                            }}
                          >
                            Logout
                          </Link>
                        </li>
                      </div>
                    ) : (
                      <div className="login">
                        <li className="menu-item f1">
                          <Link
                            to="/registro"
                            className="item-link"
                            onClick={this.handleOnClick}
                          >
                            Sing In
                          </Link>
                        </li>

                        <li className="menu-item f2">
                          <Link
                            to="/login"
                            className="item-link"
                            onClick={this.handleOnClick}
                          >
                            Log in
                          </Link>
                        </li>
                      </div>
                    )}
                  </ul>
                </li>
              </ul>
            </div>
          </header>

          <main className="Main">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/carta" component={About} />
              <Route path="/Service" component={Service} />
              <Route path="/contact" component={Contact} />
              <PublicRoute
                authed={this.state.authed}
                path="/login"
                component={Login}
              />
              <PublicRoute
                authed={this.state.authed}
                path="/registro"
                component={Register}
              />
              <PrivateRoute
                authed={this.state.authed}
                path="/blog"
                component={Blog}
              />
              <Route component={Page404} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
