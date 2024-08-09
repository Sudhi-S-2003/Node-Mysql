import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
  return (
    <div className="fixed-top">
      <h3>Mysql web</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Data">Data</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
