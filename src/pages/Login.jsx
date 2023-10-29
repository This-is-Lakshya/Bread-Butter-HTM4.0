import React from 'react';
import {Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import loginImg from '../assets/images/loginImg.svg'
import '../styles/login.css';

const Login = () => {
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
                <input type="email" placeholder='Email' required id='email' />
              </FormGroup>

              <FormGroup>
                <input type="password" placeholder='Password' required id='password' />
              </FormGroup>

              <Button className='auth__btn' type='submit'>Login</Button>
            </Form>
            <p>Don't have an account? <Link to='/register'>Create</Link></p>
          </div>
        </div>
      </div>
  )
}

export default Login;