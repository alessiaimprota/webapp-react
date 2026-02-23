import { Link } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import inceptionImage from "../assets/inception.jpg";

const CardMovie = () => {
  return (
    <Card style={{ width: "18rem" }} className="m-5">
      <Card.Img variant="top" src={inceptionImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">
          <Link to="/movies/1">Vai al dettaglio</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardMovie;
