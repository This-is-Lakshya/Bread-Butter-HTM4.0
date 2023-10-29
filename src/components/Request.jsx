import React from 'react';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../styles/request.css';

const Request = () => {
  return (
    <div className='requestBox'>
      <div className='txt_left'><h1>Want to help?</h1></div>
      <div className='btn_right'>
        <h1>Vist the given link</h1>
        <Button><Link to="/makerequest">Make Request</Link></Button>
      </div>
    </div>
  )
}

export default Request;