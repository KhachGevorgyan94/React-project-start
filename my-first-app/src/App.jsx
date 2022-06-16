import React from "react";
import './App.css';
import Header from "./components/Header";
import Section from './components/section';
import AboutUs from './components/about-us';
import Footer from "./components/Footer";
import Contact from './components/contact';
import {Route, Switch, Redirect} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route path={'/'} exact={true}>
          <Section/>
        </Route>
        <Route path={'/about-us'} exact={true} >
          <AboutUs/>
        </Route>
        <Route path={'/contact'} exact={true}>
          <Contact/>
        </Route>
        
        <Redirect to={'/'}>
          <Section/>
        </Redirect>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;