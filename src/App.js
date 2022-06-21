import React from "react";
import './App.css';
import ClickEvent from "./components/click";
import ChangeEvent from "./components/change";
import TestComponent from "./components/test-component";
import EventsBox from "./components/Events-box";

class App extends React.Component {

  state = {
    isShowTest:false,

  }

  toggleShow = ()=>{
    this.setState({isShowTest:!this.state.isShowTest})
  }


  render() {
    return <div>
      {/*<ClickEvent/>*/}
      {/*<ChangeEvent/>*/}
      <EventsBox/>
      <button onClick={this.toggleShow}>clicl me</button>

      {this.state.isShowTest ?<TestComponent/>: null}
    </div>
  }
}

export default App;
