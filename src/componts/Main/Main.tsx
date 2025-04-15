import { Container, Row, Col } from "react-bootstrap";
import styles from "./main.module.css";
import Image from "next/image";
import heroImage from "../../../public/heroimge.png";
import { TbPointFilled } from "react-icons/tb";
import { FaRegCalendarTimes } from "react-icons/fa";

const Main = () => {
  return (
    <main className={`${styles.main} pb-5`}>
      {/* top part */}
      <Container className="pt-5 pb-lg-5">
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
            <button
              className={`${styles.buttonappontments} py-3  align-items-center rounded-3 fs-5 fw-medium mt-4 text-white border-0  px-4`}
            >
              <FaRegCalendarTimes />
              <span className="pe-2">حجز موعد الاَن</span>
            </button>
          </Col>

          {/* hero imge */}
          <Col lg={6}>
            <Image
              className="w-100 pt-5 h-auto"
              alt="hero image"
              src={heroImage}
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
