import React from "react";

const RegistrationForm = ({ submitFormHandler }) => {
  return (
    <form onSubmit={submitFormHandler} id="signup">
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
      <label style={info}>Confirm Password</label>
      <input
        name="confirm_password"
        type="password"
        id="confirm_password"
        style={infoInput}
      ></input>
      <br></br>
      <button id="submit" style={submitButton}>
        Submit
      </button>
    </form>
  );
};

export default RegistrationForm;

//inline styling
const info = {
  fontSize: "19px",
  padding: "25px",
  paddingTop: "10px",
  marginTop: "",
  marginLeft: "",
  color: "#2C120D",
  fontFamily: "sans-serif",
  float: "left"
};

const infoInput = {
  width: "250px",
  padding: "10px",
  marginTop: "10px",
  marginBottom: "10px",
  color: "#2C120D",
  fontSize: "19px"
};

const submitButton = {
  marginTop: "25px",
  marginBottom: "150px",
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
  fontFamily: "sans-serif"
};
