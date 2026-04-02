import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiBell } from "react-icons/bi";
import { RiMenuLine } from "react-icons/ri";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Navbar expand="md" className="px-4 " id="nav-bar">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            {" "}
            <div className="d-flex align-items-center gap-3">
              <Link to="/">
                <Image src="/src/assets/logo.png" alt="Logo" className="" />
              </Link>
              <div>
                <h2
                  className="fs-3 fw-bold"
                  style={{
                    color: "var(--theme-gold)",
                    borderColor: "transparent",
                    backgroundColor: "transparent",
                    textDecoration: "none",
                  }}
                >
                  NETH <br />
                  BOOKPOINT
                </h2>
              </div>
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="p-1 border-0 bg-transparent">
              <RiMenuLine size={20} color="var(--theme-gold)" />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="ms-auto gap-2 align-items-center">
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
              <Link to="/team" className="nav-link">
                Team
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <Link to="/sellers" className="nav-link">
                Sellers
              </Link>
            
              <Link to="/login" className="nav-link" style={{ color: "var(--theme-gold)" }}>
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
