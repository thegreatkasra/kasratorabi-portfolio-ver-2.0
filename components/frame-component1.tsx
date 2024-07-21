import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
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

export default FrameComponent;
