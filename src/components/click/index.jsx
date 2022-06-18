import React from "react";

class ClickEvent extends React.Component {


  state = {
    isActive: null,

    formData:{
      firstName:'Khachik',
      lastName:'gevorgyan'
    }
  }

  componentDidMount() {
    this.setState({isActive: 0})
  }

  clickMe = () => {


    console.log('Button  clicked')
  }

  changeTab = (tab) => {
    this.setState({isActive: tab})
  }

  render() {
    return <div>
      <button onClick={this.clickMe}>click firstName</button>
      {/* Argumentov  data poxancelu depqum  sxal  click  funckia ogtagorcelu tarberak */}
      TODO Nman dzev cheq ogtagorcum
      {/*<button onClick={this.changeTab(0)}>click me</button>*/}
      <ul>
        <li onClick={() => this.changeTab(0)} className={`${this.state.isActive === 0 ? 'P-active' : ''}`}>test1</li>
        <li onClick={() => this.changeTab(1)} className={`${this.state.isActive === 1 ? 'P-active' : ''}`}>test2</li>
        <li onClick={() => this.changeTab(2)} className={`${this.state.isActive === 2 ? 'P-active' : ''}`}>test3</li>
        <li onClick={() => this.changeTab(3)} className={`${this.state.isActive === 3 ? 'P-active' : ''}`}>test4</li>
        <li onClick={() => this.changeTab(4)} className={`${this.state.isActive === 4 ? 'P-active' : ''}`}>test5</li>
      </ul>

      {this.state.isActive === 0 ? <div>Section 1</div> : null}
      {this.state.isActive === 1 ? <div>Section 2</div> : null}
      {this.state.isActive === 2 ? <div>Section 3</div> : null}
      {this.state.isActive === 3 ? <div>Section 4</div> : null}
      {this.state.isActive === 4 ? <div>Section 5</div> : null}

    </div>
  }
}

export default ClickEvent;
