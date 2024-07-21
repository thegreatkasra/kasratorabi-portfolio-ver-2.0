import type { NextPage } from "next";
import styles from "./skil1.module.css";

export type Skil1Type = {
  className?: string;
};

const Skil1: NextPage<Skil1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.skil1, className].join(" ")}>
      <div className={styles.applications}>
        <div className={styles.div}>
          <img className={styles.figmaLogoIcon} alt="" src="/figma-logo.svg" />
        </div>
        <img className={styles.icon} alt="" src="/2.svg" />
        <img className={styles.icon} alt="" src="/3.svg" />
        <img className={styles.icon2} alt="" src="/41@2x.png" />
        <img className={styles.icon} alt="" src="/5.svg" />
      </div>
    </div>
  );
};

export default Skil1;
