import type { NextPage } from "next";
import styles from "./container-wrapper.module.css";

export type ContainerWrapperType = {
  className?: string;
};

const ContainerWrapper: NextPage<ContainerWrapperType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.parent, className].join(" ")}>
      <div className={styles.div}>
        <img
          className={styles.nodejsLogoIcon}
          alt=""
          src="/nodejs-logo1@2x.png"
        />
      </div>
      <img className={styles.icon} alt="" src="/33.svg" />
      <img className={styles.icon} alt="" src="/44.svg" />
      <img className={styles.icon} alt="" src="/44.svg" />
      <div className={styles.div}>
        <img className={styles.r1Icon} alt="" src="/r-11@2x.png" />
        <img className={styles.r1Icon} alt="" src="/r-11@2x.png" />
      </div>
    </div>
  );
};

export default ContainerWrapper;
