import type { NextPage } from "next";
import styles from "./skil.module.css";

export type SkilType = {
  className?: string;
};

const Skil: NextPage<SkilType> = ({ className = "" }) => {
  return (
    <div className={[styles.skil2, className].join(" ")}>
      <div className={styles.applications}>
        <div className={styles.div}>
          <img
            className={styles.adobeXdLogoIcon}
            alt=""
            src="/adobexd-logo.svg"
          />
        </div>
        <div className={styles.div}>
          <img className={styles.r1Icon} alt="" src="/r-1@2x.png" />
          <img className={styles.r1Icon} alt="" src="/r-1@2x.png" />
        </div>
        <div className={styles.div}>
          <div className={styles.css3AndHtml5LogosAndWordm}>
            <div className={styles.layer1}>
              <img className={styles.g3013Icon} alt="" src="/g3013.svg" />
              <img className={styles.g3054Icon} alt="" src="/g3054.svg" />
            </div>
          </div>
        </div>
        <img className={styles.icon} alt="" src="/411.svg" />
        <img className={styles.icon1} alt="" src="/51@2x.png" />
      </div>
    </div>
  );
};

export default Skil;
