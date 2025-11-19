import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import Signup1 from './Signup1';
import Login1 from './Login1';
import Dashboard from './Dashboard';
import ProductList from './ProductList';
import Api from './Api';
import Product from './Product';

function App() {
  return (
    <div>
      <Router>
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/LoginPage' element={<Login/>}/>
      <Route path='/SignupPage' element={<Signup/>}/>
      <Route path='/Homepage' element={<Home/>}/>
      <Route path='/Signup1' element={<Signup1/>}/>
      <Route path='/Login1' element={<Login1/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/ProductList' element={<ProductList/>}/>
      <Route path='/Api' element={<Api/>}/>
      <Route path='/Product' element={<Product/>}/>
       </Routes>
        </Router>
    </div>
  );
}

export default App;
