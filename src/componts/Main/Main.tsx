import { Container, Row, Col } from "react-bootstrap";
import styles from "./main.module.css";
import Image from "next/image";
import heroImage from "../../../public/heroimge.png";
import { TbPointFilled } from "react-icons/tb";

const Main = () => {
  return (
    <main>
      {/* top part */}
      <Container className="pt-5 ">
        <Row className="pt-5 mt-5">
          {/* main text */}
          <Col lg={6} className=" text-center text-lg-end pt-lg-5  mt-lg-5">
            <h3 className={`${styles.texth3}`}>عيادة الدكتورة</h3>
            <h1 className={`${styles.texth1} d-none d-md-block pt-3`}>
              دالــــــــيا مــــــاضى
            </h1>
            <h1 className={`${styles.texth1} d-md-none pt-3`}>
              دالـــــــــــيـــــا مـــــــاضــــى
            </h1>
            <p className={`${styles.textp} fs-5 pt-4`}>
              بنوفرلك رعاية طبية مميزة ومتابعة خاصة ليكى ولطفلك <br />
              مع دكـــــــتورة دالــــــــيا مـــــــاضى
              <ul className={` pt-2 ${styles.heroul}`}>
                <li>
                  <TbPointFilled /> ماجستير نسا وتوليد – جامعة الإسكندرية
                </li>
                <li>
                  <TbPointFilled /> زمالة تنظيم الأسرة والصحة الإنجابية – مستشفى
                  دار إسماعيل
                </li>
                <li>
                  {" "}
                  <TbPointFilled />
                  دبلومة التجميل النسائي – الجمعية الأمريكية
                </li>
                <li>
                  <TbPointFilled />
                  عضو الجمعية المصرية لطب الجنين والأشعة الـ 4D
                </li>
              </ul>
            </p>
          </Col>

          {/* hero imge */}
          <Col lg={6}>
            <Image
              className="w-100 pt-lg-5 h-auto"
              alt="hero image"
              src={heroImage}
            />
          </Col>
        </Row>
      </Container>

      {/* buttom part */}
      <Container className=""></Container>
    </main>
  );
};

export default Main;
