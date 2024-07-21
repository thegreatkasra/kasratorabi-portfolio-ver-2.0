import type { NextPage } from "next";
import Header from "../components/header";
import styles from "./home-page1.module.css";

const HomePage1: NextPage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.d} />
      <div className={styles.text1Parent}>
        <div className={styles.text1}>
          <div className={styles.fresh}>Fresh</div>
          <div className={styles.fresh}>Modern</div>
          <div className={styles.fresh}>High quality</div>
        </div>
        <div className={styles.text2}>
          <b className={styles.uiDesignerUx}>Ui Designer Ux Researcher</b>
        </div>
      </div>
      <div className={styles.frame}>
        <Header
          logoLeft="50px"
          logoWidth="unset"
          logoOverflow="unset"
          logoPadding="unset"
          logoGap="67px"
          logoPosition="absolute"
          logoTop="0px"
        />
      </div>
    </div>
  );
};

export default HomePage1;
