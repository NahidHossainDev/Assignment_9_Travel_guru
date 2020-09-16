import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import BookNow from './Component/Book/BookNow';
import NotFound from './Component/NotFound';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/bookNow/:id">
          <BookNow></BookNow>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
