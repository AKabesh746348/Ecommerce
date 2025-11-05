import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Signup1 from './Signup1';
import Login1 from './Login1';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='LoginPage' element={<Login/>}/>
      <Route path='SignupPage' element={<Signup/>}/>
      <Route path='Homepage' element={<Home/>}/>
      <Route path='Signup1' element={<Signup1/>}/>
      <Route path='Login1' element={<Login1/>}/>
      <Route path='Dashboard' element={<Dashboard/>}/>
       </Routes>
        </Router>
    </div>
  );
}

export default App;
