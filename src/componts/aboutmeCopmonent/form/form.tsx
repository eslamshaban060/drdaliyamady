"use client";
import styles from "../aboutMe.module.css";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [massage, setmassage] = useState("");

  return (
    <div>
      <form action="" className={`${styles.form}  w-100  py-3`}>
        <input
          className=" border-0 outline-0 mb-3 px-3 py-2"
          type="text"
          placeholder="اسمك"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          className=" border-0 outline-0 mb-3 px-3 py-2"
          type="email"
          placeholder="بريدك الاكترونى "
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          className=" border-0 outline-0 mb-4 px-3 py-2"
          type="tel"
          maxLength={11}
          minLength={11}
          placeholder=" رقم التلفون  "
          value={phone}
          onChange={(e) => {
            setphone(e.target.value);
          }}
        />
        <input
          className=" border-0 outline-0 mb-3 px-3 py-2"
          type="text"
          placeholder="الرسالة"
          value={massage}
          onChange={(e) => {
            setmassage(e.target.value);
          }}
        />
        <button
          className={`${styles.formButton} px-4 py-3 rounded-2 mt-4 border-0`}
        >
          <span className="pe-2"> ارسال الرسالة</span>
          <IoArrowBack />
        </button>
      </form>
    </div>
  );
};

export default Form;
