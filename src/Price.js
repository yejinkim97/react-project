import { Container, Jumbotron, Alert } from "react-bootstrap";

import "./Price.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Price() {
  return (
    <Container className="Price">
      <Navigation />

      <Jumbotron fluid className="price-background">
        <Container className="text-center">
          <h1>견적 문의</h1>
          <br />
          <Alert variant="info">
            <Alert.Heading>010-6657-3022</Alert.Heading>
          </Alert>
          <br />
          <h3>
            문자나 전화 주시면 친절하게 상담해 드리겠습니다.
            <br />
            <br />
            영업시간 AM 9:00 ~ PM 7:00
            <br />
            일요일/공휴일은 휴무입니다.
          </h3>
        </Container>
      </Jumbotron>
      <Footer />
    </Container>
  );
}
