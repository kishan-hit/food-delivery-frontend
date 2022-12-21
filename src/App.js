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
import AddRestaurant from './components/AddRestaurant';
import Main from './components/Main';
import SignUp from './components/SignUp';
import NewLogin from './components/Login';
import EmailVerify from './components/EmailVerify';
import  Restaurant from './components/Restaurant';
import RestaurantFoods from './components/RestaurantFoods';
import AddFood from './components/AddFood';
import Pizza from "./components/Pizza.jsx"

function App() {
  return (
    <Router> 
    <TopBar/>
    <NavBar/>
      <Routes>
        <Route exact path="/orders" element={<OrderScreen/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/register" element={<SignUp/>} />
        <Route exact path="/login" element={<NewLogin/>} />
        <Route path='/users/:id/verify/:token' element={<EmailVerify/>} />
        <Route exact path="/cart" element={<CartScreen/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/policy" element={<Policy/>} />
        <Route exact path="/add-restaurant" element={<AddRestaurant/>} />
        <Route exact path="/" element={<Restaurant/>} />
        <Route exact path="restaurant/:id" element={<RestaurantFoods/>}/>
        <Route exact path="/add-food" element={<AddFood/>} />
        <Route exact path="/pizza" element={<Pizza/>} />

      </Routes>
    </Router>
    // <div>
    // <TopBar/>
    // </div>
  );
}

export default App;
