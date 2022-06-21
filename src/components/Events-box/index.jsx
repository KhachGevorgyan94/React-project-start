import React from 'react';


class EventsBox extends React.Component {

  state = {
    isactive: false,
    formData: {
      firstName: '',
      lastName: '',
      password: '',
      againPassword: ''
    },
    errorData: {
      firstName: false,
      lastName: false,
      password: false,
      againPassword: false,
      confirmPassword: false,
      maxlengthPassword:false
    }
  }
  onChangeInputText = (e) => {
    const {formData, errorData} = this.state
    formData[e.target.name] = e.target.value
    errorData[e.target.name] = false
    this.setState({formData, errorData})
  }

  validation = () => {
    let isValidation = true
    const {formData} = this.state
    const errors = {
      firstName: false,
      lastName: false,
      password: false,
      againPassword: false,
      confirmPassword: false,
      maxlengthPassword: false,
    }

    if(!formData.firstName){
      isValidation = false;
      errors.firstName = true
    }
    if(!formData.lastName){
      isValidation = false;
      errors.lastName = true
    }
    if(!formData.password){
      isValidation = false;
      errors.password = true
    }
    if(!formData.againPassword){
      isValidation = false;
      errors.againPassword = true
    }
    if(formData.password && formData.password.length<6){
      isValidation = false;
      errors.maxlengthPassword = true
    }
    if(formData.password && formData.againPassword && formData.password!==formData.againPassword){
      isValidation = false;
      errors.confirmPassword = true
    }
    this.setState({errorData:errors})
    return isValidation
  }

  saveClick = () => {
    if (this.validation()) {
      this.setState({isactive:true})
      // fetch('https://jsonplaceholder.typicode.com/usercreate', {
      //   body: this.state.formData
      // })
      //   .then(response => response.json())
      //   .then(json => console.log(json))
      // console.log(this.state.formData)
    }else{
      console.log('error Validation')
    }
  }

  render() {
    const {errorData, formData} = this.state

    return <div className='forma'>
      <div>


        <input name={'firstName'}
               value={formData.firstName}
               placeholder='FirstName'
               onChange={this.onChangeInputText}
               type="text"/>
        {errorData.firstName ?
          <p className='P-red'>Լրացրեք 'FirstName' տողը</p> : null}
      </div>
      <div>
        <input name={'lastName'}
               value={formData.lastName}
               placeholder='LastName'
               onChange={this.onChangeInputText}
               type="text"/>
        {errorData.lastName ?
          <p className='P-red'>Լրացրեք 'LastName' տողը</p> : null}
      </div>
      <div>
        <input name={'password'}
               value={formData.password}
               placeholder='Password'
               onChange={this.onChangeInputText}
               type='password'/>
        {errorData.password ?
          <p className='P-red'>Լրացրեք 'Password' տողը</p> : null}
        {errorData.maxlengthPassword ?
          <p className='P-red'>Ձեր գաղտնաբառը պետէ ե  լինի մինիմւմ 6 Սիմվոլ</p> : null}
      </div>
      <div>
        <input name={'againPassword'}
               value={formData.againPassword}
               placeholder='Repeat Password'
               onChange={this.onChangeInputText}
               type='password'/>
        {errorData.againPassword ?
          <p className='P-red'>Լրացրեք 'Repeat Password' տողը</p> : null}
        {errorData.confirmPassword ?
          <p className='P-red'>'Password' և 'Repeat Password' տողերը պետք է լինեն նույնը</p> : null}
      </div>
      <button onClick={this.saveClick}>Save</button>
      {this.state.isactive === true ? <h2 className='P-h2'>Thank You</h2> : null}
    </div>

  }
}

export default EventsBox