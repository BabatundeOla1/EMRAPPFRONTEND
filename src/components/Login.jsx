import React, { useState }  from 'react'
import styles from './login.module.css'
import { Link } from 'react-router-dom'

function Login(){


   const [email, setEmail] = useState(""); 
   const [password, setPasssword] = useState(""); 
   const [error, setError] = useState("");

   const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email)
  }

  const handlePassword = (e) => {
    setPasssword(e.target.value);
    console.log(password);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      alert('Email must contain the @')
      setError('Invalid email or password');

    } 
    else {
      alert('Login successful!');
    }
  };

  

  return(
    <div className = {styles.loginPage}>
        <p className={styles.login}>Login</p>

      <div className={styles.newLoginForm}>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email"> Email: </label> <br />
          <input type="text" placeholder='Email' className={styles.email} onChange={handleEmail}/> <br />

          <label htmlFor="email"> Password: </label> <br />
          <input type="password" placeholder='password' className={styles.password} onChange={handlePassword}/> <br />


          <div className={styles.dontHaveAnAccountSignUp}> 
            <Link to={'/DashBoard'}> 
              <button className={styles.dontHaveAnAccountSignUpButton}>LOGIN</button> 
            </Link>
            {/* <button className={styles.dontHaveAnAccountSignUpButton}>LOGIN</button> */}

            <p>Don't have an Account? 
              <Link className={styles.linkToSignUp} to= {'/SignUp'}> Sign Up </Link> 
            </p> <br/>

          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
