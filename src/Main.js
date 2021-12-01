import { Carousel } from "react-bootstrap";
let text =
  "저희 올크린는 상가, 오피스, 건물, 공동주택, 병원, 식당, 카페 등에 전문적인 노하우를 가진 업체로 최상의 맞춤 청소 서비스를 제공하여 고객님의 자산가치를 높여 드리고 있습니다.";

let name = "올크린";
export default function Main() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/9vvp_nuVaJk/900"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>{name}</h1>
          <h3>{text}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/bzbWIxsN3iQ/"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>{name}</h1>
          <h3>{text}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/PG8NyM_Mcts/"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>{name}</h1>
          <h3>{text}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
