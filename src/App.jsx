import React, { Component } from "react";
import DisplayMenuAndOrder from "./components/DisplayMenuAndOrder";
import LoginForm from "./components/LoginForm";
import { authenticate, register } from "./modules/authenticate";
import RegistrationForm from "./components/RegistrationForm";
import "./index.css";

class App extends Component {
  state = {
    renderLoginForm: false,
    authenticated: false,
    renderRegistrationForm: false
  };

  onSignIn = async e => {
    let response;
    e.preventDefault();
    if (e.target.id === "signup") {
      response = await register(
        e.target.name.value,
        e.target.email.value,
        e.target.password.value,
        e.target.confirm_password.value
      );
    } else {
      response = await authenticate(
        e.target.email.value,
        e.target.password.value
      );
    }

    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({
        message: response.message[0],
        renderRegistrationForm: false,
        renderLoginForm: false
      });
    }
  };

  render() {
    const {
      renderLoginForm,
      renderRegistrationForm,
      authenticated,
      message
    } = this.state;
    let renderLogin;
    let renderRegister;
    let renderResponse;
    let renderSignIn;

    switch (true) {
      case renderRegistrationForm && !authenticated:
        renderRegister = <RegistrationForm submitFormHandler={this.onSignIn} />;
        break;
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onSignIn} />;
        break;
      case !authenticated:
        renderSignIn = (
          <>
            <button
              id="render-signup"
              style={signupButton}
              onClick={() => this.setState({ renderRegistrationForm: true })}
            >
              Sign up
            </button>

            <button
              id="render-login"
              style={loginButton}
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </button>
            <p id="message">{message}</p>
          </>
        );
        break;
      case authenticated:
        renderResponse = (
          <p id="message" style={helloMessage}>
            Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}! Hungry?
          </p>
        );
        break;
    }
    return (
      <>
        <h1> * FoodBaby *</h1>
        {renderLogin}
        {renderRegister}
        {renderResponse}
        {renderSignIn}
        {this.state.authenticated === true && <DisplayMenuAndOrder />}
      </>
    );
  }
}
export default App;

//inline styling
const signupButton = {
  fontSize: "15px",
  paddingLeft: "25px",
  paddingRight: "25px",
  paddingTop: "15px",
  paddingBottom: "13px",
  alignItems: "center",
  display: "inline-block",
  backgroundColor: "#2C120D",
  color: "antiquewhite",
  borderRadius: "5px",
  fontFamily: "sans-serif",
  marginBottom: "50px",
  marginTop: ""
};
const loginButton = {
  fontSize: "15px",
  marginLeft: "20px",
  paddingLeft: "35px",
  paddingRight: "30px",
  paddingTop: "15px",
  paddingBottom: "13px",
  alignItems: "center",
  display: "inline-block",
  backgroundColor: "#2C120D",
  color: "antiquewhite",
  borderRadius: "5px",
  fontFamily: "sans-serif"
};

const helloMessage = {
  fontFamily: "sans-serif",
  fontSize: "30px",
  color: '#EF1852',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '',
};