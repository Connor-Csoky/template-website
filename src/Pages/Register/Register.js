import React,{ useState, useEffect } from "react";
import Card from "../../Components/Card";
import "../Signin/Signin.css";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [Verifcation, setVerification] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("token");
    if (loggedInUser) {
      localStorage.clear();
      navigate("/");
    }
  }, [navigate]);


  const onNameChange = event => {
    setName(event.target.value)
  }

  const onEmailChange = event => {
    setEmail(event.target.value)
  }

  const onPasswordChange = event => {
    setPassword(event.target.value)
  }

  // const onVerificationChange = event => {
  //   setVerification(event.target.value)
  // }

  function onRegister() {
    const response = fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      })
    })
    console.log(response);
  }

  const changeRoute = () => {
    navigate('/');
  }

  const onSubmitSignIn = () => {
    onRegister();
    changeRoute();
  }


  return (
    <div className="signin-wrapper">
      <Card>
        <h1 className="signin-h1">Register</h1>
        <fieldset className="form" action="">
          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input onChange={onNameChange} id="Name" name="Name" type="text" required/>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input onChange={onEmailChange} id="Email" name="email" type="email" required/>
          </div>
          <div className="password-wrapper">
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input onChange={onPasswordChange} id="Password" name="Password" type="password" required/>
            </div>
            <div className="form-group">
              <label htmlFor="Verifcation">Confirm Password</label>
              {/* <input onChange={onVerificationChange} id="Verifcation" name="Verifcation" type="password" required/> */}
            </div>
          </div>
          <input onClick={onSubmitSignIn} type="submit" />
        </fieldset>
      </Card>
      <div>Already have an account? <Link to="/signin">Sign In</Link></div>
    </div>
  )
}