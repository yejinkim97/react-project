import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

import "./Navigation.css";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className="brandname" as={Link} to="/">
          청소업체 올크린
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              서비스 소개
            </Nav.Link>
            <Nav.Link as={Link} to="/house">
              집 청소
            </Nav.Link>
            <Nav.Link as={Link} to="/business">
              사업장 청소
            </Nav.Link>
            <Nav.Link as={Link} to="/price">
              견적문의
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
