import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="">
      <Link to="/">Home</Link>
      <Link to="/explorer">Explorer</Link>
    </nav>
  );
}

export default Navbar;
