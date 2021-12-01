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
            상호: 올크린 대표: 김유택 <br />
            사업자번호: 111-11-11111 대표전화: 010-6657-3022
            <br /> COPYRIGHT(C) ALLCLEAN. ALL RIGHT RESERVED.
            <br /> Website Created by Yejin Kim
          </p>
        </Col>
      </Row>
    </Container>
  );
}
