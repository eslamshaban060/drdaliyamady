"use client";
import styles from "./nav.module.css";
import Link from "next/link";
import Smalnav from "./smalnave/Smalnav";
import { useState } from "react";

interface navItemTypes {
  name: string;
  link: string;
  id: number;
}
export const navItems: navItemTypes[] = [
  { name: "الرئسية", link: "/", id: 0 },
  { name: "عن الدكتور ", link: "/about", id: 1 },
  { name: "خدمات العيادة", link: "/services", id: 2 },
  { name: "تواصل معى ", link: "/contact", id: 3 },
  { name: "المقالات", link: "/blog", id: 4 },
];
const Nav = () => {
  const [itemid, setitemid] = useState(0);
  const activelink = (id: number) => {
    setitemid(id);
  };
  return (
    <div className={`pt-4 gap-4 d-flex justify-content-between`}>
      <div
        className={` pt-3 pt-lg-1 d-none  gap-xl-4 gap-3 d-lg-flex justify-content-between`}
      >
        {navItems.map((link, id) => {
          return (
            <Link
              className={` ${styles.link}   text-decoration-none`}
              key={id}
              href={link.link}
              onClick={() => {
                activelink(link.id);
              }}
              style={{ color: itemid === id ? "#e09eba" : "#5784ba" }}
            >
              {link.name}
            </Link>
          );
        })}
        <div className="ms-1 ms-xl-4">
          <Link
            href="/appointment"
            className={` d-block text-center  rounded-2 text-decoration-none ${styles.appointButton}`}
          >
            احجز الاَن
          </Link>
        </div>
      </div>
      <div className="ms-1 d-none d-md-block d-lg-none ms-xl-4">
        <Link
          href="/appointment"
          className={` d-block text-center  rounded-2 text-decoration-none ${styles.appointButton}  ${styles.appointButton2}  `}
        >
          احجز الاَن
        </Link>
      </div>
      <div className={`d-lg-none  pt-1 d-block`}>
        <Smalnav />
      </div>
    </div>
  );
};

export default Nav;
