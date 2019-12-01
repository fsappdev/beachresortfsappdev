import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Test from "./pages/Test";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    //react fragment
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/test/" component={Test} />
        <Route component={Error} />

      </Switch>
      <Footer />
    </>
  );
}

export default App;
