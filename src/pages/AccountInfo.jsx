import React, { useState, useEffect } from 'react';
import '../styles/accountInfo.css';
import {auth} from '../firebase';
import {signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const AccountInfo = () => {

    const [username, setUsername] = useState('');
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
          if(user){
            setUsername(user.displayName);
            setUserId(user.email);
          }else{
            setUsername("");
            setUserId("");
          }
        });
      }, []);

    const handleLogOut = ()=>{
        signOut(auth).then((val)=>{
            navigate('/');
        })
    }

  return (
    <div className="AccountInfo">
        <div className="accBox">
            <h2>{username.toUpperCase()}</h2>
            <h4>{userId.toLowerCase()}</h4>
            <button className="logOutBtn" onClick={handleLogOut} >Log Out</button>
        </div>
    </div>
  )
}

export default AccountInfo;