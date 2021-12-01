import { Container, Jumbotron, Alert } from "react-bootstrap";

import "./Home.css";

import Navigation from "./Navigation";
import Footer from "./Footer";
import Icons from "./Icons";
import Cards from "./Cards";
import Main from "./Main";
/**
 * 
 *  <Jumbotron fluid className="main-background">
          <Container className="text-center">
            <h1>청소업체 올크린</h1>
            <br />
            <br />
            <h3>
              저희 올크린는 <br />
              상가, 오피스, 건물, 공동주택, 병원, 식당, 카페 등에 <br />
              전문적인 노하우를 가진 업체로 최상의 맞춤 청소 서비스를 제공하여
              <br />
              고객님의 자산가치를 높여 드리고 있습니다.
              <br />
              <br />
              <Icons />
              <br />
              <br />
              <Alert variant="info">
                <Alert.Heading>010-6657-3022</Alert.Heading>
              </Alert>
            </h3>
          </Container>
        </Jumbotron>
 * 
 * 
 */
export default function Home() {
  return (
    <div className="Home">
      <Container>
        <Navigation />

        <Main />
        <Cards />
        <Footer />
      </Container>
    </div>
  );
}
