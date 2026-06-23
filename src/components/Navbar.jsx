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

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
        <div className="navbar-nav ms-auto">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;