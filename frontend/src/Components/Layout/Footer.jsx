import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { LuFacebook, LuLinkedin } from "react-icons/lu";

const Footer = () => {
  return (
    <footer
      className=""
      style={{
        backgroundColor: "var(--theme-black)",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <Container fluid>
        <Stack gap={12}>
          <div className="px-5">
            <Image src="/src/assets/fotorlogo.png" alt="Logo" className="" />
          </div>
          <span
            style={{
              height: "2px",
              width: "100%",
              backgroundColor: "var(--theme-white)",
            }}
          ></span>
          <div className="py-4 px-5 ">
            <Row>
              <Col>
                <p style={{ color: "var(--theme-white)" }}>
                  © 2024 | Neth BookPoint
                </p>
              </Col>
              <Col>
                <p style={{ color: "var(--theme-gold)" }}>
                  {" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                </p>
              </Col>
              <Col className="d-flex justify-content-end gap-3">
                <LuFacebook size={43} />
                <LuLinkedin size={43} />
              </Col>
            </Row>
          </div>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
