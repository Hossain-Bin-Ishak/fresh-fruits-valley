import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Admin from './components/Admin/Admin';
import PageNotFound from './components/PageNotFound/PageNotFound'
import ProductDetail from './components/ProductDetail/ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddProduct from './components/AddProduct/AddProduct';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/checkout/:productId">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/product">
            <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
