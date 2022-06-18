import React from "react";


class ChangeEvent extends React.Component {

  state = {
    formData: {
      firstName: '',
      lastName: '',
    },

    userFormDatA: {
      position: '',
      age: '',
      price: '',
      model: ''
    },
    firstName: ""
  }


  onChangeInputText = (e, name) => {
    /**
     * Call back  function
     * stugelu  hamar  maingamic stati  popoxutyunn
     * **/
    // this.setState({inputTextValue:e.target.value},()=>{
    //   console.log(this.state.inputTextValue,'changed -----')
    // })\
    /** Tarberak 1 stati input data change anelu
     * Obkect makardakov
     * **/
    const {formData} = this.state
    formData[e.target.name] = e.target.value
    this.setState({formData})

    /** Tarberak 2 stati input data change anelu
     * Stati makardakov
     * **/

    this.setState({[e.target.name]: e.target.value})
  }

  onChangePosition = (e) => {
    this.setState({
      userFormDatA: {
        ...this.state.userFormDatA,
        position: e.target.value
      }
    })
  }
  onChangePosition1 = (e) => {
    this.setState({
      userFormDatA: {
        ...this.state.userFormDatA,
        age: e.target.value
      }
    })
  }
  onChangePosition2 = (e) => {
    this.setState({
      userFormDatA: {
        ...this.state.userFormDatA,
        price: e.target.value
      }
    })
  }
  onChangePosition3 = (e) => {
    this.setState({
      userFormDatA: {
        ...this.state.userFormDatA,
        model: e.target.value
      }
    })
  }


  render() {
    return <div>
      <input name={'firstName'}
             value={this.state.userFormDatA.age}
             onChange={(e)=>this.onChangeInputText(e,'fistName')} type="text"/>
      <input name={'firstName'}
             value={this.state.userFormDatA.position}
             onChange={this.onChangePosition} type="text"/>
      <input name={'firstName'}
             value={this.state.userFormDatA.model}
             onChange={this.onChangePosition3} type="text"/>
      <input name={'firstName'}
             value={this.state.userFormDatA.price}
             onChange={this.onChangePosition2} type="text"/>
      {/*<input onChange={} type="range"/>*/}
      {/*<input onChange={} type="color"/>*/}
      {/*<input onChange={} type="checkbox"/>*/}
      {/*<input onChange={} type="radio"/>*/}
      {/*<input onChange={} type="file"/>*/}

    </div>
  }


}

export default ChangeEvent