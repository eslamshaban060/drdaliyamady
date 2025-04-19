"use client";
import styles from "../aboutMe.module.css";
import { IoArrowBack } from "react-icons/io5";
import React, { useState } from "react";
import ReactWhatsapp from "react-whatsapp";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [massage, setmassage] = useState("");

  const whatsappMessage = `-------------- استشارة جديدة----------:

👤 *الاسم*: ${name}

📧 *البريد الإلكتروني*: ${email}

📞 *رقم الهاتف*: ${phone}

💬 *الرسالة*:
${massage}

`;

  return (
    <div>
      <form action="" className={`${styles.form}  w-100  py-3`}>
        <input
          className=" border-0 outline-0 mb-3 px-3 py-2"
          type="text"
          placeholder="اسمك"
          value={name}
          required
          data-tooltip-id="tooltip"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        {
          <ReactTooltip
            id="tooltip"
            content="يجب أن يكون النص أكثر من 10 حروف"
          />
        }
        <input
          className=" border-0 outline-0 mb-3 px-3 py-2"
          type="email"
          placeholder="بريدك الاكترونى "
          value={email}
          required
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
          required
          onChange={(e) => {
            setphone(e.target.value);
          }}
        />
        <input
          className=" border-0 outline-0 mb-3 px-3 py-2"
          type="text"
          placeholder="الرسالة"
          value={massage}
          required
          onChange={(e) => {
            setmassage(e.target.value);
          }}
        />
        <ReactWhatsapp
          number="201145570733   "
          message={whatsappMessage}
          element="button"
          className={`${styles.formButton} px-4 py-3 rounded-2 mt-4 border-0`}
        >
          <span className="pe-2"> ارسال الرسالة</span>
          <IoArrowBack />
        </ReactWhatsapp>
      </form>
    </div>
  );
};

export default Form;
