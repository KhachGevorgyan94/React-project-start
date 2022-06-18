import React from "react";
import './App.css';
import ClickEvent from "./components/click";
import ChangeEvent from "./components/change";

class App extends React.Component {


  render() {
    return <div>
      <ClickEvent/>
      <hr/>
      <ChangeEvent/>
    </div>
  }
}

export default App;
