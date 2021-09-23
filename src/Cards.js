import { Card, CardGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Cards() {
  return (
    <CardGroup className="Cards">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>집 청소</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Button as={Link} to="/house" variant="outline-info">
            {" "}
            자세히 보기
          </Button>
        </Card.Body>
      </Card>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>사업장 청소</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>

          <Button as={Link} to="/business" variant="outline-info">
            {" "}
            자세히 보기
          </Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
