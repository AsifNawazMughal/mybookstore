import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
// If you are using react-bootstrap, uncomment the next line:
// import { Container } from 'react-bootstrap';

const Hero = () => {
  return (
    <div id="body">
      <div className="container-lg text-center d-flex flex-column align-items-center  h-100 p-5">
        <h1 className="heading fw-bolder display-3 mb-4 ">
          The Books Lover Dream Land awaits
        </h1>

        <p className="sub-heading fs-4" style={{ color: "var(--theme-white)" }}>
          Discover your next great read with our curated selection of books
          across all genres. Dive into a world of knowledge, adventure, and
          imagination today!
        </p>

        <Row className="w-full">
          <Col sm={12} className="mx-auto">
            <InputGroup className="mb-3 w-full" id="search-box">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className="my-custom-input"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
