import styles from "./logo.module.css";
import Image from "next/image";
import logoImage from "../../../../public/logo.png";
const Logo = () => {
  return (
    <div className={`d-flex gap-2 ${styles.Thelogo}`}>
      {/* logo image */}
      <Image
        className={`${styles.logoImage}`}
        src={logoImage}
        alt="logo image"
      />

      {/* logo text  */}
      <div className={`d-flex  flex-column   pt-2`}>
        <h2 className={`${styles.logoH2} pt-2 `}>د.دليا ماضى </h2>
        <p className={`${styles.logoP} `}>اخصائى النسا والتوليد </p>
      </div>
    </div>
  );
};

export default Logo;
