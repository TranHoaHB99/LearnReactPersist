import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from 'react-router-dom';
import './Header.scss';
const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Apps
            </a>
          </Col>

          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/posts"
              activeClassName="header__link--active"
            >
              Posts
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
