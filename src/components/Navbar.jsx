import logo from "../assets/logo/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">

        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="May's Animal Care"
            height="170"
          />
        </a>

        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">Services</a>
          <a className="nav-link" href="#">About</a>
          <a className="nav-link" href="#">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;