import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RequestForm from './components/RequestForm';
import './App.css';

import {auth} from './firebase';
import { useEffect, useState } from 'react';
import AccountInfo from './pages/AccountInfo';

function App() {

  const [username, setUsername] = useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUsername((user.displayName).toUpperCase());
      }else{
        setUsername("");
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar name={username} />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/makerequest' element={<RequestForm />} />
          <Route path='/accountInfo' element={<AccountInfo />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;