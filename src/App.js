import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import './App.css';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RequestForm from './components/RequestForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/makerequest' element={<RequestForm />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;