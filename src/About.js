import { Container } from "react-bootstrap";

import Navigation from "./Navigation";
import Footer from "./Footer";

export default function About() {
  return (
    <Container>
      <Navigation />
      <p>서비스소개</p>
      <Footer />
    </Container>
  );
}
