import React from "react";
import './App.css';
import Header from "./Components/Header";
import Section from "./Components/section";
import AboutUs from "./Components/about-us";
import Contact from "./Components/contact";
import Footer from "./Components/Footer";
import { Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={'/'} exact={true} >
          <Section />
        </Route>
        <Route path={'/about-us'} exact={true} >
          <AboutUs />
        </Route>
        <Route path={'/'} exact={true} >
          <AboutUs />
        </Route>
        <Route path={'/contact'} exact={true}>
          <Contact />
        </Route>

        {/*-------------------------------*/}
        <Redirect to={'/'}>
          <Section />
        </Redirect>
        {/*-------------------------------*/}

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
