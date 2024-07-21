import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./form.module.css";

export type FormType = {
  className?: string;

  /** Style props */
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
};

const Form: NextPage<FormType> = ({
  className = "",
  frameDivTop,
  frameDivLeft,
}) => {
  const formStyle: CSSProperties = useMemo(() => {
    return {
      top: frameDivTop,
      left: frameDivLeft,
    };
  }, [frameDivTop, frameDivLeft]);

  return (
    <div className={[styles.form, className].join(" ")} style={formStyle}>
      <div className={styles.emailRequiredParent}>
        <b className={styles.emailRequired}>Email: (Required)</b>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.emailRequiredParent}>
        <b className={styles.emailRequired}>Full Name: (Required)</b>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.emailRequiredParent}>
        <b className={styles.emailRequired}>Company:</b>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.emailRequiredParent}>
        <b className={styles.emailRequired}>Message:</b>
        <div className={styles.rectangleDiv} />
      </div>
      <div className={styles.sendWrapper}>
        <b className={styles.send}>SEND</b>
      </div>
    </div>
  );
};

export default Form;
