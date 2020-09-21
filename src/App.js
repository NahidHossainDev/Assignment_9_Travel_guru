import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import BookNow from './Component/Book/BookNow';
import NotFound from './Component/NotFound';
import SearchHotel from './Component/SearchHotel/SearchHotel';
import Login from './Component/login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';



export const ContextElement = createContext()

function App() {

  const [headerNav, setHeaderNav] = useState(false)
  const [days, setDays] = useState([])
   const [userLogIn, setUserLogIn] = useState({});

  return (
    <ContextElement.Provider
      value={[headerNav, setHeaderNav, days, setDays, userLogIn, setUserLogIn]}
    >
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/bookNow/:id">
            <BookNow></BookNow>
          </Route>
          <PrivateRoute path="/searchHotel/:id">
            <SearchHotel />
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </ContextElement.Provider>
  );
}

export default App;
