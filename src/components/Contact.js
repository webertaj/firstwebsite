import React, { Component } from 'react'
import { Grid, Col, Row,FormControl,ControlLabel,Button,FormGroup,Form} from 'react-bootstrap';
import './Contact.css';

export default class Contact extends Component {
 
  state={
    name:'',
    email:'',
    phonenumber:'',
    message:''
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
      <Grid>
      <Row className="total-grid" xs={12} sm={4} >
      
   
          <div className="Wrapper">
          <h2>Ping Us</h2>
         <div className="Form-Wrapper">

            <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup controlId="username" validationState='success'>
     <Col componentClass={ControlLabel} sm={2}>
      UserName:
     </Col>
     <Col sm={8}>
    <FormControl type="text" name="name" placeholder="UserName" onChange={e => this.changeNameFromInput(e)} value={this.state.name}/>
     </Col>
  </FormGroup>

        <FormGroup controlId="email" validationState='success'> 
     <Col componentClass={ControlLabel} sm={2}>
      Email:
     </Col>
     <Col sm={8}>
    <FormControl type="email" name="email" placeholder="Email" onChange={e => this.changeNameFromInput(e)} value={this.state.email} />
     </Col>
  </FormGroup>

  
        <FormGroup controlId="phonenumber" validationState='success'>    
     <Col componentClass={ControlLabel} sm={2}>
      PhoneNumber: 
     </Col>
     <Col sm={8}>
    <FormControl type="number" name="phonenumber" placeholder="Phone Number" onChange={e => this.changeNameFromInput(e)} value={this.state.phonenumber} />
     </Col>
  </FormGroup>

<FormGroup  controlId ='message box ' validationState='success'>
<Col componentClass={ControlLabel} sm={2}>
      <ControlLabel>Message</ControlLabel>
      </Col>
     <Col sm={8}>
      <FormControl componentClass="textarea" placeholder="Leave your message....." name="message" onChange={e => this.changeNameFromInput(e)} value={this.state.message} />
      </Col>
</FormGroup>

  </Form>
  <div className="col-md-10 text-center">
  <Button className="submit btn-primary" onClick={e => this.handleSubmit(e)}>submit</Button>
  </div>
  </div>
  </div>
   
      </Row> 
      </Grid>
      </div>

    )
  }
}
