import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiBell } from "react-icons/bi";
import { RiMenuLine } from "react-icons/ri";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
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
              <Nav.Link href="#link">
                <BiBell size={23} />
              </Nav.Link>

              <Row className="gy-2 text-center justify-content-center my-auto px-0 ">
                <Col md={12} className="justify-content-center">
                  <Image
                    src="/src/assets/porifle.png"
                    alt="Profile"
                    className="rounded-circle"
                  />
                </Col>
                <Col md={12}>
                  <p style={{ color: "var(--theme-white)" }}>user@gmail.com</p>
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
