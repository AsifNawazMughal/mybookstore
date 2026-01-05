import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { BiBell } from "react-icons/bi";
import { Col, Image, Row } from "react-bootstrap";
const Header: React.FC = () => {
  return (
    <header>
      <Navbar expand="md" className="px-4 " id="nav-bar">
        <div className="container-fluid ">
          <Navbar.Brand href="#home">
            <div className="d-flex align-items-center gap-3">
              <Image src="/src/assets/logo.png" alt="Logo" />
              <div>
                <h2 className="fs-4 fs-md-3 fs-lg-3">
                  NETH <br />           
                  BOOKPOINT
                </h2>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4 align-items-center">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Shop</Nav.Link>
              <Nav.Link href="#">Delivery Team</Nav.Link>
              <Nav.Link href="#link">Sellers</Nav.Link>
              <Nav.Link href="#link">
                <BiBell size={23} />
              </Nav.Link>
            
                <Row className="gy-2 text-center justify-content-center my-auto px-0 ">
                  <Col md={12} className="justify-content-center">
                    <Image src="/src/assets/porifle.png" alt="Profile" />
                  </Col>
                  <Col md={12}>
                    <p style={{color:"white"}} >user@gmail.com</p>
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
