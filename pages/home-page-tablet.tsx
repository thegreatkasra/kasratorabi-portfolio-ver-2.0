import type { NextPage } from "next";
import Property1H1 from "../components/property1-h";
import styles from "./home-page-tablet.module.css";

const HomePageTablet: NextPage = () => {
  return (
    <div className={styles.homepageTablet}>
      <img className={styles.bgIcon} alt="" src="/bg3.svg" />
      <div className={styles.navTabletParent}>
        <Property1H1
          property1HPosition="absolute"
          property1HTop="-1px"
          property1HLeft="253px"
        />
        <div className={styles.logo}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <b className={styles.kasraTorabi}>Kasra Torabi</b>
        </div>
      </div>
      <div className={styles.d} />
      <div className={styles.text}>
        <div className={styles.fresh}>Fresh</div>
        <div className={styles.fresh}>Modern</div>
        <div className={styles.fresh}>High quality</div>
      </div>
      <div className={styles.text2}>
        <b className={styles.uiDesignerUx}>Ui Designer Ux Researcher</b>
      </div>
    </div>
  );
};

export default HomePageTablet;