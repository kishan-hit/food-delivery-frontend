import React from 'react';
import './App.css';
// import { Container } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from './screens/CartScreen';
import Register from './screens/Register';
import Login from './screens/Login';
import OrderScreen from './screens/OrderScreen';

function App() {
  return (
    <Router>
    <TopBar/>
    <NavBar/>
      <Routes>
        <Route exact path="/orders" element={<OrderScreen/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/cart" element={<CartScreen/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/policy" element={<Policy/>} />
        <Route exact path="/" element={<HomeScreen/>} />
      </Routes>
    </Router>
    // <div>
    // <TopBar/>
    // </div>
  );
}

export default App;
