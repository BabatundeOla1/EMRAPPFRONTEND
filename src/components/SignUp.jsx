import React, { useState }  from 'react'
import styles from "./signUp.module.css"
import { Link } from 'react-router-dom'

function SignUp() {

  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPasssword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleFirstName = (e)=>{
    setFirstName(e.target.value);
    console.log(firstName);
  }

  const handleLastName = (e) => {
    setLastName(e.target.value);
    console.log(lastName);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email)
  }

  const handlePassword = (e) => {
    setPasssword(e.target.value);
    console.log(password);
  }

  const handleConfirmedPassword = (e) => {
    setConfirmPassword(e.target.value);
    console.log(confirmPassword);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password === confirmPassword) {
      alert('Signup successful!');
      return;
    }
    else{
      setError('Password does not match!');
      alert("Password does not match");

    }
  };



  useEffect(() => {
    axios
      .get("http://localhost:9100/signup")
      .then(result => {
        setExampleList(result.data);
      })

  }, );

  return (
    <div className={styles.signUpForm}>
      <p className={styles.signUp}>SIGN UP</p>

      <div className={styles.newSignUpForm}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName" >First Name:</label> <br />
          <input type="text" placeholder="Enter First Name" className={styles.firstName} onChange={handleFirstName}/><br />
       
          <label htmlFor="lastName">Last Name:</label><br />
          <input type="text" placeholder="Enter Last Name" className={styles.lastName} onChange={handleLastName}/><br />

          <label htmlFor="email">Email:</label><br />
          <input type="email" placeholder="Enter email" className={styles.email} onChange={handleEmail}/><br />
       
          <label htmlFor="password">Password:</label><br />
          <input type="password" placeholder="Enter paswword" className={styles.password} onChange={handlePassword}/><br />
             
          <label htmlFor="confirmPassword">Confrim Password:</label><br />
          <input type="password" placeholder="Enter password" className={styles.confirmPassword} onChange={handleConfirmedPassword}/><br />

          <p>SELECT GENDER: </p>
            <select>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
           
            <div className= {styles.alreadyHaveAnAccount}>
              <Link to={'/DashBoard'}> 
                <button>SIGN UP</button> 
              </Link>

              <p>Already have an Account? 
                <Link className={styles.linkToLogin} to={'/'}> Login </Link> 
              </p>
               
            </div>
        </form>        
      </div>
       
    </div>
  )
}

export default SignUp
