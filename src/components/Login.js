import React, { Component } from 'react';
import {Col,FormControl,ControlLabel,Button,FormGroup,Form} from 'react-bootstrap';
import { Link,NavLink } from 'react-router-dom';
import './Login.css';

export default class Login extends Component {
  state={
    email:'',
    password:''
  }

changeNameFromInput =(e) =>{
      this.setState({
        [e.target.name] : e.target.value
      });
}
handleSubmit = (e) =>{
  e.preventDefault();
  console.log(this.state);
};


  render() {
    return (
      <div>
        <div className="Wrapper">
          <h2>Sign Up</h2>
         <div className="Form-Wrapper">

            <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup controlId="Email" validationState='success'>
     <Col componentClass={ControlLabel} sm={2}>
      Email:
     </Col>
     <Col sm={8}>
    <FormControl type="email" name="email" placeholder="Email" onChange={e => this.changeNameFromInput(e)} value={this.state.email}/>
     </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword" validationState='success'>
     <Col componentClass={ControlLabel} sm={2}>
      Password:
     </Col>
     <Col sm={8}>
    <FormControl type="password" name="Password" placeholder="Password" onChange={e => this.changeNameFromInput(e)} value={this.state.Password} />
     </Col>
  </FormGroup>

  <div className="col-md-10 text-center">
  <Button className="submit btn-primary" onClick={e => this.handleSubmit(e)}>submit</Button><br/><br/>
  <span><small>Not yet Registered ?</small></span>   <NavLink to="/Userregistration">Register</NavLink>
  </div>
  </Form>
  </div>
  </div>
 
      </div>
    )
  }
}
