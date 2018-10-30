import React, { Component } from 'react'
import {Form,FormGroup,ControlLabel,FormControl,Button,Col} from 'react-bootstrap';
import { RadioGroup, RadioButton } from 'react-radio-buttons';  
import Select from 'react-select';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import './Userregistration.css';

const Branch=[
    {label :"C.S.E", value:"computerscienceengineering"},
    {label :"E.E.E " ,value: "electricalengineering"},
    {label :"E.C.E ",value:"electricalandelectronicsengineering"},
    {label :"MECH", value:"mechanicalengineering"},
    {label :"CIV",value:"civilengineering"},
    {label :"AMT" ,value:"automobileengineering"}
];

export default class Userregistration extends Component {
    state ={
        FirstName:"",
        LastName :"",
        Password:"", 
        ReenterPassword:"",
        Email:""  ,
        selectedOption:null ,
        radio:" ",
        Checkbox:" "
};


handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
}

changeNameFromInput = (e) => {
    this.setState({
       [e.target.name]:e.target.value
    });
  };

  valuefromSelect=(selectedOption)=>{
      this.setState({selectedOption});
      console.log(`option selected:`,selectedOption);
};

updateRadioButton =(value)=>{
  this.setState({radio:value })
};

colorChanged =(value)=>{
    this.setState({checkbox : value})
};

  render() {
      const {selectedOption}=this.state;
    return (
      <div className="Wrapper">
         <div className="Form-Wrapper">
         <h2 >SIGN UP</h2>

        <Form horizontal onSubmit={this.handleSubmit}>
        <FormGroup controlId="formHorizontalFirstName" validationState='success'>
        
     <Col componentClass={ControlLabel} sm={2}>
      FirstName:
     </Col>
     <Col sm={8}>
    <FormControl type="text" name="FirstName" placeholder="FirstName" onChange={e => this.changeNameFromInput(e)} value={this.state.FirstName} />
     </Col>
  </FormGroup>

   <FormGroup controlId="formHorizontalLastName" validationState='success'>
     <Col componentClass={ControlLabel} sm={2}>
      LastName:
     </Col>
     <Col sm={8}>
    <FormControl type="text" name="LastName" placeholder="LastName" onChange={e => this.changeNameFromInput(e)} value={this.state.LastName} />
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

  <FormGroup controlId="formHorizontalRenterPassword" validationState='success'>
     <Col componentClass={ControlLabel} sm={2}>
      ReenterPassword:
     </Col>
     <Col sm={8}>
     <FormControl type="password" name="ReenterPassword" placeholder="ReenterPassword" onChange={e => this.changeNameFromInput(e)} value={this.state.ReenterPassword} />
     </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalBranch" validationState='success'>
     <Col componentClass={ControlLabel} sm={2}>
      Branches:
     </Col>
     <Col sm={8}>
     <Select options={Branch} value={selectedOption}
     onChange={ this.valuefromSelect }  isMulti defaultValue={Branch[0]} placeholder="Enter your branch" />
  </Col>
  
  </FormGroup>

  <FormGroup controlId="formHorizontalgender" validationState='success'>
     <Col componentClass={ControlLabel} sm={2}>
      Gender:
     </Col>
     <Col sm={8}>
     <RadioGroup horizontal onChange={this.updateRadioButton} >
        <RadioButton value="Male" defaultChecked={this.state.radio}>Male</RadioButton>
        <RadioButton value="Female">Female</RadioButton>
   </RadioGroup></Col>
   </FormGroup>

   <FormGroup controlId="formHorizontalcolor" validationState='success'>
     <Col componentClass={ControlLabel} sm={2}>
      FavouriteColor:
     </Col>
     <Col sm={8}>
     <CheckboxGroup className='checkboxx'
     checkboxDepth={3} // This is needed to optimize the checkbox group
     name="colors" value={this.state.checkbox} onChange={this.colorChanged}>
  <label><Checkbox value="Red"/>Red</label>
  <label><Checkbox value="Green"/>Green</label>
  <label><Checkbox value="Orange"/>Orange</label>
</CheckboxGroup></Col>

</FormGroup>
    
 <FormGroup controlId="formHorizontalEmail" validationState='success'>
     <Col componentClass={ControlLabel} sm={2}>
      Email:
     </Col>
     <Col sm={8}>
    <FormControl type="email" name="Email" placeholder="Email" onChange={e => this.changeNameFromInput(e)}  value={this.state.Email}/>
      </Col>
  </FormGroup>
  <div className="col-md-10 text-center">
  <Button ClassName="submit btn-primary" onClick={e => this.handleSubmit(e)}>submit</Button>
  </div>
 
  </Form>
  </div>
   
   </div>
    )
  }
}



 