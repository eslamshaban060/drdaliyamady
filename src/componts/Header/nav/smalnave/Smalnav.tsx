"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./smailnam.module.css";
import { PiListBold } from "react-icons/pi";
import Image from "next/image";
import logoImage from "../../../../../public/logo.png";
import { navItems } from "../Nav";
import Link from "next/link";
import Socalmedia from "./socalmedia/Socalmedia";

function Smalnav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} className={` ${styles.smallnavbutton}`}>
        <PiListBold />
      </Button>
      <Offcanvas
        className={` pb-3 ${styles.Offcanvas}`}
        show={show}
        onHide={handleClose}
        placement="end"
        name="end"
      >
        <Offcanvas.Header
          className={`${styles.closebutton} text-center position-absolute`}
          closeButton
        ></Offcanvas.Header>
        <Offcanvas.Title className={`${styles.title}`}>
          <div className={`d-flex p-2 pt-3 gap-2 `}>
            {/* logo image */}
            <Image src={logoImage} alt="logo image" width={90} />

            {/* logo text  */}
            <div className={`d-flex flex-column  pt-2`}>
              <h2 className={`${styles.logoH2} pt-2 `}>د.دليا ماضى </h2>
              <p className={`${styles.logoP} `}>اخصائى النسا والتوليد </p>
            </div>
          </div>
        </Offcanvas.Title>

        <Offcanvas.Body
          className={`${styles.sidebody} d-flex flex-column gap-3  pt-4 `}
        >
          {navItems.map((link, id) => {
            return (
              <Link
                className={` ${styles.link} w-100 fs-4 py-2 px-2 d-block text-decoration-none text-white`}
                key={id}
                href={link.link}
              >
                {link.name}
              </Link>
            );
          })}
        </Offcanvas.Body>
        <div className={`text-center ${styles.sidefooter}`}>
          <div>
            <Socalmedia />
          </div>
          <p className=" text-white">© حقوق الطبع والنشر ٢٠٢٥</p>
        </div>
      </Offcanvas>
    </div>
  );
}

export default Smalnav;
