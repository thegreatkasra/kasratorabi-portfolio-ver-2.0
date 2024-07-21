import type { NextPage } from "next";
import Menu from "../components/menu";
import styles from "./android-home-page.module.css";

const AndroidHomePage: NextPage = () => {
  return (
    <div className={styles.androidhomepage}>
      <img className={styles.bgIcon} alt="" src="/bg1.svg" />
      <div className={styles.top}>
        <div className={styles.logo}>
          <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          <b className={styles.kasraTorabi}>Kasra Torabi</b>
        </div>
      </div>
      <div className={styles.d} />
      <div className={styles.text2}>
        <b className={styles.uiUx}>Ui / Ux Designer</b>
      </div>
      <div className={styles.text}>
        <div className={styles.fresh}>Fresh</div>
        <div className={styles.fresh}>High quality</div>
        <div className={styles.fresh}>Modern</div>
      </div>
      <Menu />
    </div>
  );
};

export default AndroidHomePage;
