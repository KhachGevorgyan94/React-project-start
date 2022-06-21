import React from "react";


class TestComponent extends React.Component {
  state = {
    isCreated:false,
    data:null
  }

  // Componentn create linelui  jamanak ashxatuma  ays  funkcian
  componentDidMount() {
    console.log('componentDidMount')
    this.setState({isCreated:true})
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }



  render() {
    return <div className={`${this.state.isCreated? 'P-test':''}`}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur dolorem ea ex illo ipsum nam
      nobis numquam odio, quam, quia quis, suscipit ullam voluptas voluptates! Architecto id illum mollitia?
    </div>
  }
}


export default TestComponent