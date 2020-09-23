import React, { createContext, useState } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home/Home';

import mainImg from '../src/images/farm.jpg';
import Header from './components/Header/Header';
import Detail from './components/Detail/Detail';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Order from './components/Order/Order';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


  export  const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});

  return (
    <div style={{backgroundImage:`url(${mainImg})`,
    backgroundSize:'cover',backgroundPosition:'center',
    height:'150vh',width:'100%',
    backgroundRepeat:'no-repeat'} }>

<UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     
  

<Router>

  <Header></Header>
  <Switch>
    <Route path="/home">
    <Home></Home>
    </Route>
    <Route path="/detail/:type">
      <Detail></Detail>
      </Route> 
      <Route path="/login">
      <Login></Login>
      </Route>
      <Route path="/productDetail/:name">
        <ProductDetail></ProductDetail>
      </Route>
      <PrivateRoute path="/order/:name">
        <Order></Order>
      </PrivateRoute>
      <Route path="/">
      <Home></Home>
      </Route>
  </Switch>
</Router>

</UserContext.Provider>

    </div>
  );
}

export default App;
