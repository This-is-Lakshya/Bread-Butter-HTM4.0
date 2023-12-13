import React, { useState } from 'react';
import {Form, FormGroup, Button} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import registerImg from '../assets/images/registerImg.svg';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import '../styles/register.css';
import { auth } from '../firebase';

const Register = () => {

  const navigate = useNavigate();

  const [select, setSelect] = useState();
  const [values, setValues] = useState({
    name:"",
    email:"",
    pass:"",
  });

  const handleSubmit = ()=>{
    if(!values.name || !values.email || !values.pass){
      return;
    }
    createUserWithEmailAndPassword(auth, values.email, values.pass).then(async(res) =>{
      const user = res.user;
      await updateProfile(user,{
        displayName: values.name,
      });
      navigate("/");
    }).catch(err => console.log(err, "- ERROR"))
  }

  return (
    <div className='outerBox'>
        <div className='register'>
          <div className='img_sec'>
            <img src={registerImg} alt="" />
          </div>
          <div className='register_sec'>
            <h1>Register</h1>
            <Form>
              <FormGroup>
                <input type="name" placeholder='Full Name' required id='name' onChange={(event)=>setValues((prev)=>({...prev, name: event.target.value }))} />
              </FormGroup>

              <FormGroup>
                <input type="email" placeholder='Email' required id='email' onChange={(event)=>setValues((prev)=>({...prev, email: event.target.value }))} />
              </FormGroup>

              <h5 className='select_label'>Who are you?</h5>
              <FormGroup>
                <select value={select} onChange={e=>setSelect(e.target.value)} required placeholder='who' >
                  <option>An Individual</option>
                  <option>Organization/NGO</option>
                </select>
              </FormGroup>

              <FormGroup>
                <input type="password" placeholder='Password' required id='password' onChange={(event)=>setValues((prev)=>({...prev, pass: event.target.value }))} />
              </FormGroup>

              <Button onClick={handleSubmit} className='auth__btn'>Register</Button>
            </Form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
  )
}

export default Register;