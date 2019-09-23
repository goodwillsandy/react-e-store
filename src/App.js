import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProdutList from './components/Productlist';
import Details from './components/Details';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        {/* exact key word matches the eaxact path  */}
        <Route exact path="/" component={ProdutList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </>
  );
}

export default App;

// todo
// What is context Api?
// what are Proptypes fucntionality in react?
//learn a little about styled component
