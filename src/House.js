import { Container } from "react-bootstrap";
import Footer from "./Footer";

import Navigation from "./Navigation";

export default function House() {
  return (
    <Container>
      <Navigation />
      <p>집청소</p>
      <Footer />
    </Container>
  );
}
