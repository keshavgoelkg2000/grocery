import { useEffect } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import AOS from 'aos';
import Login from './Component/Login/Login';
import 'aos/dist/aos.css';
import LoginUsingOTP from './Component/Login/LoginUsingOTP';
import LoginForNewUser from './Component/Login/LoginForNewUser';
import LoginUsingPassword from './Component/Login/LoginUsingPassword';
import { BrowserRouter as Router, Link , Route, Routes  } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from 'reactstrap';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();

  }, [])

  return (
    <div className='App'>
      <Router>
            <ToastContainer/>
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/login' Component={Login} />
            <Route path='/loginUsingPassword' Component={LoginUsingPassword} />
            <Route path='/LoginUsingOTP' Component={LoginUsingOTP} />
            <Route path='/register' Component={LoginForNewUser} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
