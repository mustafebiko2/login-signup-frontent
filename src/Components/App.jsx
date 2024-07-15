import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home'
import SignIn from './SignIn'
import Signup from './Signup'


function App() {
  const path = window.location.pathname;

  return (
    <Router>
      {path === '/signin' && <SignIn />}
      {path === '/signup' && <Signup />}
      {['/', '/home', '/mainpage'].includes(path) && <Home />}
    </Router>
  );
}

export default App;
