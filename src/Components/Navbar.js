import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/group">
        Group
      </Link>
      <Link className="link" to="/personal">
        Personal
      </Link>
      <Link className="link" to="/all">
        All
      </Link>
    </nav>
  );
};

module.exports.Navbar = Navbar;
