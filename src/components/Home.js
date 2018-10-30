import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Aganith Software</h2>
          <p>A place where beautiful and fully functional websites are build upon your needs.</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper"> 
            <Image src=".\pictures\image4.jpg" circle className="profile-pic"/>
            <h3>Fin</h3>
            <p>A developer with funny accent :)</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src=".\pictures\image2.jpg" circle className="profile-pic"/>
            <h3>Jack</h3>
            <p>A developer with good looks :)</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src=".\pictures\image3.jpg" circle className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>A great Tester for Testing us :)</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
