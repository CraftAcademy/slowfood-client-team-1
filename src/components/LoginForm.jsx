import React from "react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <form onSubmit={submitFormHandler} id="login">
      <label style={info}>Email</label>
      <input name="email" type="email" id="email" style={infoInput}></input>
      <br></br>
      <label style={info}>Password</label>
      <input
        name="password"
        type="password"
        id="password"
        style={infoInput}
      ></input>
      <br></br>
      <button id="submit" style={submitButton}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;

//inline styling
const info = {
  fontSize: "19px",
  padding: "25px",
  paddingTop: "10px",
  alignItems: "center",
  marginTop: "",
  marginLeft: "",
  color: "#2C120D",
  fontFamily: "sans-serif"
};

const infoInput = {
  width: "250px",
  padding: "10px",
  marginTop: "10px",
  marginBottom: "10px",
  color: "#2C120D",
  fontSize: "19px",
  display: "InlineBlock"
};

const submitButton = {
  marginTop: "10px",
  marginBottom: "150px",
  fontSize: "15px",
  paddingLeft: "25px",
  paddingRight: "25px",
  paddingTop: "15px",
  paddingBottom: "13px",
  alignItems: "center",
  display: "inline-block",
  backgroundColor: "#2C120D",
  color: "white",
  borderRadius: "5px",
  fontFamily: "sans-serif"
};
