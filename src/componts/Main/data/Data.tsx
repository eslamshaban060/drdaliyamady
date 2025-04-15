import styles from "./data.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const Data = () => {
  return (
    <Container>
      <Row className={`  ${styles.row}  justify-content-between py-4`}>
        <Col
          className={`${styles.col} rounded-3 mx-auto d-flex  px-0 gap-0  mt-4 m-md-0`}
          lg={4}
          md={6}
        >
          <div className={`${styles.icon}  text-center py-2 ${styles.icon1}`}>
            <IoLogoWhatsapp />
          </div>
          <div
            className={`${styles.datatext}  py-4 fw-medium fs-4 text-center `}
          >
            <p>0155-223-2348</p>
          </div>
        </Col>
        <Col
          className={`${styles.col} rounded-3 mx-auto  d-flex  px-0 gap-0  mt-4 m-md-0`}
          lg={4}
          md={6}
        >
          <div className={`${styles.icon}  text-center py-2`}>
            <IoTimeOutline />
          </div>
          <div
            className={`${styles.datatext} ${styles.datatext2} py-4 fw-medium  fs-4 text-center `}
          >
            <p>من الاحد الى الخميس</p>
          </div>
        </Col>
        <Col
          className={`${styles.col} rounded-3 mx-auto  d-flex  px-0 gap-0  mt-4 m-lg-0`}
          lg={4}
          md={6}
        >
          <div className={`${styles.icon} text-center py-2 ${styles.icon3}`}>
            <MdOutlinePhoneInTalk />
          </div>
          <div
            className={`${styles.datatext}  py-4 fw-medium fs-4 text-center `}
          >
            <p>0122-781-2348</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Data;
