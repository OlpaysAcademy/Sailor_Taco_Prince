// @flow
import React, { Component } from 'react';
import { Navbar, Row, Col } from 'react-bootstrap';

import RecipeList from '../containers/RecipeList';
import Recipe from '../containers/Recipe';
import UnreadCount from '../containers/UnreadCount';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">
                Taco Waco
                {' '}
                <UnreadCount />
              </a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Row className="show-grid">
          <Col xs={6}>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">Recipes List</a>
                </Navbar.Brand>
              </Navbar.Header>
            </Navbar>
            <RecipeList />
          </Col>
          <Col xs={6}>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">Recipe</a>
                </Navbar.Brand>
              </Navbar.Header>
            </Navbar>
            <Recipe />
          </Col>
        </Row>
      </div>

    );
  }
}

export default App;
