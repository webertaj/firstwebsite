import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/CustomNavbar';
import Login from './components/Login';
import Userregistration from './components/Userregistration';
import Form from './components/Form';


class App extends Component {
  render() {
    return (
      <Router>
    
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Contact"  component={Contact} />
          <Route path="/Login" component={Login}/>
          <Route path="/Userregistration" component={Userregistration}/>
          <Route path="/Form" component={Form}/>
        </div>
        
      </Router>
    );
  }
}

export default App;
