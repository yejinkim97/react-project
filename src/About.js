import { Container, Card } from "react-bootstrap";

import Navigation from "./Navigation";
import Footer from "./Footer";

export default function About() {
  return (
    <Container>
      <Navigation />
      <Card>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Footer />
    </Container>
  );
}
