import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from './Frontend/Components/User/Landing/Landing.js';
import SignUp from './Frontend/Components/User/SignUp/Signup';
import SignIn from './Frontend/Components/User/SignIn/SignIn';
import LandingPage from './Frontend/Components/User/LandingPage/LandingPage';

import './App.css';

function App() {
  return (
    <div>
      {/* <h1>Hi</h1> */}
      <Router>
        <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/travelbuddy' element={<LandingPage/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
