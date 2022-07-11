import React from "react";
import './App.css';
import Header from "./Component/header";
import { Route, Switch,Redirect} from 'react-router-dom'
import Disagne from "./Component/Disagne";
import Online from "./Component/online-marqeting";
import Logo from "./Component/logo";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
          <Route path={"/"} exact={true}>
              <Disagne />
          </Route>
          <Route path={"/online-marqeting"} exact={true}>
              <Online />
          </Route>
          <Route path={"/e-commerce"} exact={true}>
              <Online />
          </Route>
          <Route path={"/logo-branding"} exact={true}>
              <Logo />
          </Route>
          <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
