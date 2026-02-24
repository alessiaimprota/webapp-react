import { Link } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardMovie = (props) => {
  const { id, title, director, genre, realese_year, abstract, image } =
    props.movieProp;
  return (
    <Card style={{ width: "18rem" }} className="m-5">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{director}</Card.Text>
        <Card.Text>{genre}</Card.Text>
        <Card.Text>{realese_year}</Card.Text>
        <Card.Text>{abstract}</Card.Text>
        <Button variant="primary">
          <Link to={`/movies/${id}`}>Vai al dettaglio</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardMovie;
