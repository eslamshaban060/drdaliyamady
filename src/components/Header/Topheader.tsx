import { Container, Row, Col } from "react-bootstrap";

const Topheader = () => {
  return (
    <div
      className="text-white py-2"
      style={{
        backgroundColor: "var(--c-blue)",
        height: "50px",
      }}
    >
      <Container>
        <Row className=" justify-content-between pt-1">
          <Col
            xl={4}
            lg={6}
            className="mx-auto mx-lg-0  text-center  text-lg-end "
          >
            يمكنك التواصل معنا من خلال
          </Col>
          <Col lg={6} className="row d-none d-lg-block  ">
            هنا هنحط بيانات التواصل للفون والايميل
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Topheader;
