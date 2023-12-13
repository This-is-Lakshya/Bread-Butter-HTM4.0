import React, { useState } from 'react';
import {Form, FormGroup, Button} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import loginImg from '../assets/images/loginImg.svg'
import { auth } from '../firebase';
import {signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import '../styles/login.css';

const Login = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email:"",
    pass:"",
  });

  const handleSubmit = ()=>{
    if(!values.email || !values.pass){
      return;
    }
    signInWithEmailAndPassword(auth, values.email, values.pass).then(async(res) =>{
      const user = res.user;
      await updateProfile(user,{
        displayName: values.name,
      });
      navigate("/");
    }).catch(err => console.log(err, "- ERROR"))
  }

  return (
      <div className='outerBox'>
        <div className='login'>
          <div className='img_sec'>
            <img src={loginImg} alt="" />
          </div>
          <div className='login_sec'>
            <h1>Login</h1>
            <Form>
              <FormGroup>
                <input type="email" placeholder='Email' required id='email' onChange={(event)=>{
                  setValues((prev)=> ({...prev, email: event.target.value}))
                }} />
              </FormGroup>

              <FormGroup>
                <input type="password" placeholder='Password' required id='password' onChange={(event)=>{
                  setValues((prev)=> ({...prev, pass: event.target.value}))
                }} />
              </FormGroup>

              <Button onClick={handleSubmit} className='auth__btn'>Login</Button>
            </Form>
            <p>Don't have an account? <Link to='/register'>Create</Link></p>
          </div>
        </div>
      </div>
  )
}

export default Login;