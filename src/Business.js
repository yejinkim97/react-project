import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Footer from "./Footer";

import Navigation from "./Navigation";

const photos = [
  {
    id: "PG8NyM_Mcts",
    src: "https://source.unsplash.com/PG8NyM_Mcts/300x200",
  },
  {
    id: "yWwob8kwOCk",
    src: "https://source.unsplash.com/yWwob8kwOCk/300x200",
  },

  {
    id: "EwQhB7yNGOU",
    src: "https://source.unsplash.com/EwQhB7yNGOU/300x200",
  },

  {
    id: "VLHNfKF1Uec",
    src: "https://source.unsplash.com/VLHNfKF1Uec/300x200",
  },
  {
    id: "VIrribgiBSQ",
    src: "https://source.unsplash.com/VIrribgiBSQ/300x200",
  },
  {
    id: "LiqeT0W1cNM",
    src: "https://source.unsplash.com/LiqeT0W1cNM/300x200",
  },
  {
    id: "xXc7zUKIhRw",
    src: "https://source.unsplash.com/xXc7zUKIhRw/300x200",
  },
  {
    id: "OPjxGV7ubsY",
    src: "https://source.unsplash.com/OPjxGV7ubsY/300x200",
  },
  {
    id: "KR9j7uqFhnI",
    src: "https://source.unsplash.com/KR9j7uqFhnI/300x200",
  },
  {
    id: "PkbyxvkGWcU",
    src: "https://source.unsplash.com/PkbyxvkGWcU/300x200",
  },
  {
    id: "bzbWIxsN3iQ",
    src: "https://source.unsplash.com/bzbWIxsN3iQ/300x200",
  },
  {
    id: "K7o7cAq87lA",
    src: "https://source.unsplash.com/K7o7cAq87lA/300x200",
  },
  {
    id: "TS6Ml8mSXQU",
    src: "https://source.unsplash.com/TS6Ml8mSXQU/300x200",
  },
  {
    id: "3GZlhROZIQg",
    src: "https://source.unsplash.com/3GZlhROZIQg/300x200",
  },
];

export default function Business() {
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
