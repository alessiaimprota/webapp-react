import { Link } from "react-router";

const Card = () => {
  return (
    <div className="card">
      <span>sono la card</span>
      <Link to="movies/1"> vai al dettaglio </Link>
    </div>
  );
};

export default Card;
