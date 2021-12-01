import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Footer from "./Footer";

import Navigation from "./Navigation";

const photos = [
  {
    id: "ABohRftG_Os",
    src: "https://source.unsplash.com/ABohRftG_Os/300x200",
  },
  {
    id: "9vvp_nuVaJk",
    src: "https://source.unsplash.com/9vvp_nuVaJk/300x200",
  },

  {
    id: "6GruB-1L9kE",
    src: "https://source.unsplash.com/6GruB-1L9kE/300x200",
  },
  {
    id: "Bo-fW5KvdQI",
    src: "https://source.unsplash.com/Bo-fW5KvdQI/300x200",
  },
  {
    id: "L1Nt0O4Cv3g",
    src: "https://source.unsplash.com/L1Nt0O4Cv3g/300x200",
  },
  {
    id: "CVTmLMv5oG4",
    src: "https://source.unsplash.com/CVTmLMv5oG4/300x200",
  },
  {
    id: "0H-aJ06IZw4",
    src: "https://source.unsplash.com/0H-aJ06IZw4/300x200",
  },
];

export default function House() {
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
      <Container>
        <Row>
          <Col sm>
            {photos.map((i) => (
              <Image key={i.id} src={i.src} thumbnail />
            ))}
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
}
