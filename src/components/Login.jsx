import Logo from "../assets/logo.png";
import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { InputGroup, FormControl, Button, Image} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faHome, faBook, faHeart, faPlusCircle, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/Login.css";

export class Login extends Component {
    render() {
        return (
            <section className="container-fluid position-relative">
            <div className="login-logo">
              <a href="index.html"><img src={Logo} /></a>
            </div>
            <div className="login-container">
              <span> To continue, log in to Spotify.</span>
              <div className="login-button login-facebook">
                <i className="fa fa-facebook"></i>
                <span>CONTINUE WITH FACEBOOK</span>
              </div>
              <div className="login-button login-apple">
                <i className="fa fa-apple"></i>
                <span>CONTINUE WITH APPLE</span>
              </div>
              <div className="login-button login-google">
                <i className="fa fa-google"></i>
                <span>CONTINUE WITH GOOGLE</span>
              </div>
              <div className="d-flex flex-row">
                <hr />
                OR
                <hr />
              </div>
              <div className="input-group">
                <span>Email address or Username</span>
                <input placeholder="Email address or username" />
                <span>Password</span>
                <input placeholder="Password" type="password" />
              </div>
              <p>
                <a className="forgot-password" href="#">Forget your password?</a>
              </p>
              <div className="login-btn">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" for="customCheck1"
                    >Remember Me</label>
                </div>
      
                <Link to="/home"><div href="#" className="login-button login-spotify">LOG IN</div></Link>
              </div>
              <hr />
              <div className="login-footer">
                <span>Don't have an account?</span>
                <div className="login-button login-signup">
                  <span>SIGN UP ON SPOTIFY</span>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default Login
