import React, { useState } from 'react';
import {Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import registerImg from '../assets/images/registerImg.svg';
import '../styles/register.css';

const Register = () => {

  const [select, setSelect] = useState();

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
                <input type="name" placeholder='Full Name' required id='name' />
              </FormGroup>

              <FormGroup>
                <input type="email" placeholder='Email' required id='email' />
              </FormGroup>

              <h5 className='select_label'>Who are you?</h5>
              <FormGroup>
                <select value={select} onChange={e=>setSelect(e.target.value)} required placeholder='who' >
                  <option>An Individual</option>
                  <option>Organization/NGO</option>
                </select>
              </FormGroup>

              <Button className='auth__btn' type='submit'>Register</Button>
            </Form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
  )
}

export default Register;