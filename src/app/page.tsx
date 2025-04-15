import "bootstrap/dist/css/bootstrap.min.css";
import Data from "@/componts/Main/data/Data";
import styles from "./page.module.css";
import Header from "@/componts/Header/Header";
import Main from "@/componts/Main/Main";

const page = () => {
  return (
    <div>
      <section className={`${styles.homeSection}`}>
        {/* header */}
        <Header />

        {/* main */}
        <Main />
        {/* buttom part */}
        <div className={`${styles.datafooter} w-100  position-absolute`}>
          <Data />
        </div>
      </section>
    </div>
  );
};

export default page;
