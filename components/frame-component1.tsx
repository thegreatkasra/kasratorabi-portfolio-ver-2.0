import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.projectsTabletInner, className].join(" ")}>
      <div className={styles.uberFoodParent}>
        <b className={styles.uberFood}>
          <p className={styles.nikafilm}>3.NikaFilm</p>
        </b>
        <img className={styles.frameChild} alt="" src="/rectangle-32@2x.png" />
      </div>
    </div>
  );
};

export default FrameComponent1;