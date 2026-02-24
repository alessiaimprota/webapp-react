import { Link } from "react-router";
import imageInception from "../assets/inception.jpg";
import Button from "react-bootstrap/Button";
const MovieDetail = () => {
  return (
    <>
      <h1 className="m-3">Dettagliooo film</h1>
      <img className="m-3" src={imageInception} alt="cover-inception" />
      <div className="info-movie m-2 border-bottom p-3">
        <h2>title</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          distinctio in odit, minus totam quos provident culpa alias optio
          architecto, perferendis cumque enim consequuntur! Repudiandae eaque
          consequatur tempore illo quis!
        </p>
        <h2>plot</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor magni
          aspernatur nam, fuga at voluptates quas, praesentium totam temporibus
          ea saepe animi iure nobis sed culpa similique quaerat, molestiae
          commodi.
        </p>
        <h2>genre</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          deserunt vero iusto suscipit, atque illo numquam molestiae quibusdam
          recusandae tenetur non mollitia officiis dignissimos doloribus aliquid
          ducimus eius veritatis! Ipsum?
        </p>
      </div>
      <h4 className="mt-5 m-3">Reviews</h4>
      <div className="reviews-container m-3"></div>
      <Button variant="primary" className="m-3">
        <Link to="/">Vai alla home</Link>
      </Button>
    </>
  );
};
export default MovieDetail;
