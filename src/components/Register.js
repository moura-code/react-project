import React, { Component } from "react";
import { render } from "react-dom";
import '../CSS/App.css'

class Register extends Component{
  constructor(props) {
    super(props)

    this.state = {
        gmail: "",
        password: "",
        nombre:""


    }
    this.handleSubmit=this.handleSubmit.bind(this)
}


    gmailhandler = (event) => {
      this.setState({
          gmail: event.target.value
      })
  }
  passwordhandler = (event) => {
      this.setState({
          password: event.target.value
      })
  }

  nombrehandler = (event) => {
    this.setState({
        nombre: event.target.value
    })
}


    handleSubmit = (event) => {
      alert(`${this.state.nombre} Registered Successfully !!!!`)
      console.log(this.state);
      this.setState({
          gmail: "",
          password: '',
          nombre:''
      })
   event.preventDefault()
      
  }
 render(){
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className='form'>
            <div className="center center2">
              <h1>Register</h1>
            </div>
          <div className="mb-3">
          <label>Nombre:</label><br />
          <input type='text'className="form-control" title="Nombre" value={this.state.nombre} onChange={this.nombrehandler}/>
          </div>
          <div className="mb-3">
          <label>Gmail:</label><br />
          <input type='text'className="form-control" title="Gmail" value={this.state.gmail} onChange={this.gmailhandler}/>
          </div>
          <div className="mb-3"> 
            <label>Password:</label><br />
            <input title="Passord"className="form-control" type='password' value={this.state.password} onChange={this.passwordhandler} /> 
            </div>
            <button type="submit" className="btn btn-primary buton">submit</button>
          </div>
          
        </form>
      </div>
    );
    }
}
export default Register;




