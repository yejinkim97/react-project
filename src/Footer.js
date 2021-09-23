import { Link } from "react-router-dom";
import { Nav, Row, Col, Container } from "react-bootstrap";

import "./Footer.css";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <Nav className="me-auto justify-content-front">
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
        </Col>
        <Col>
          <p className="footer">
            대표전화: 010-1234-5678
            <br /> COPYRIGHT(C) ALLCLEAN. ALL RIGHT RESERVED.
            <br /> Website Created by Yejin Kim
          </p>
        </Col>
      </Row>
    </Container>
  );
}
