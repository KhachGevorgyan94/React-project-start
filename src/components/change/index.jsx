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
    firstName: "",

    rangeValue: 0,
    colorValue: '',
    isCheck: false
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
  onChangeRange = (e) => {
    this.setState({rangeValue: e.target.value}, () => {
      console.log(this.state.rangeValue, 'rangeValue')
    })
  }
  onChangeColor = (e) => {
    console.log(e.target.value)
    this.setState({colorValue: e.target.value})

  }
  onCHangeCheck = (e) => {
    this.setState({isCheck: !this.state.isCheck})

  }

  uploadFile = (e) => {
    console.log(e.target.files)
  }

  render() {
    return <div style={{backgroundColor: this.state.colorValue}}>
      <input name={'firstName'}
             value={this.state.userFormDatA.age}
             onChange={(e) => this.onChangeInputText(e, 'fistName')} type="text"/>
      <input name={'firstName'}
             value={this.state.userFormDatA.position}
             onChange={this.onChangePosition} type="text"/>
      <input name={'firstName'}
             value={this.state.userFormDatA.model}
             onChange={this.onChangePosition3} type="text"/>
      <input name={'firstName'}
             value={this.state.userFormDatA.price}
             onChange={this.onChangePosition2} type="text"/>

      <hr/>


      <input onChange={this.onChangeRange}
             className='style'
             type="range"
             value={this.state.rangeValue}
             min={0}
             max={255}
      />
      <p>{this.state.rangeValue}</p>
      <input onChange={this.onChangeColor} type="color" value={this.state.colorValue}/>
      <div>Lorem ipsum dolor sit amet.</div>


      <input checked={this.state.isCheck} onChange={this.onCHangeCheck} type="checkbox"/>
      <input type="radio" onChange={this.onCHangeCheck}/>
      <input multiple={true}  onChange={this.uploadFile} type="file"/>

    </div>
  }


}

export default ChangeEvent