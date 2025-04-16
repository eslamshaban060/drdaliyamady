import styles from "./aboutMe.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "./form/form";

const AoutMe = () => {
  return (
    <Container className={`mt-5 py-5 ${styles.about}`}>
      <Row className=" justify-content-center align-items-center">
        <Col className=" text-lg-end  text-center" lg={6}>
          {/* button */}
          <button
            className={`${styles.buttonTitle}  rounded-5 px-4 border-0 fs-5 py-3`}
          >
            عن عيادتنا
          </button>
          <h2 className={`${styles.titleh2} fw-bold pt-5 fs-2`}>
            علشان راحتك{" "}
          </h2>
          <h3 className={`${styles.titleh3} fw-bold  mt-4 fs-3`}>
            {" "}
            واطمئنانك أهم حاجة عندنا
          </h3>
          <p className={`${styles.titlep} px-2 px-lg-0 ps-lg-4 pt-3`}>
            ولان هدفنا مش بس تقديم خدمة طبية متميزة، لكن كمان نكون دايمًا سند
            ليكي، نسمعك، نفهمك، ونطمنك في كل خطوة من رحلتك. تقدرى تبعتى استفسارك
            لينا فى اى وقت وهنرد عليكى فى اسرع وقت ممكن
          </p>
        </Col>
        <Col className="py-5" lg={6}>
          <div
            className={`${styles.formmassage} py-5 px-4 px-sm-5 mx-auto  rounded-4`}
          >
            <h3 className={`${styles.titleh4} fw-bold  mt-4 fs-2`}>
              لطلب استشارة
            </h3>
            <p className={`${styles.titlep}  pt-3`}>
              يرجى ملء النموذج أدناه <br />
              وسنقوم بالرد عليكى فى اسرع وقت ممكن
            </p>
            <Form />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AoutMe;
