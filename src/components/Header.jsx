//iniziamo con il componente header
//importo link da react per usare i link
import { Link } from "react-router";

const Header = () => {
  return (
    <nav>
      <Link to="/">Bool Movies</Link>
    </nav>
  );
};

export default Header;
