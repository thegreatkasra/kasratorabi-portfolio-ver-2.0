import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./contact-btn.module.css";

export type ContactBtnType = {
  className?: string;
  telegram?: string;

  /** Style props */
  contactBtnAlignSelf?: CSSProperties["alignSelf"];
};

const ContactBtn: NextPage<ContactBtnType> = ({
  className = "",
  telegram,
  contactBtnAlignSelf,
}) => {
  const contactBtnStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: contactBtnAlignSelf,
    };
  }, [contactBtnAlignSelf]);

  return (
    <div
      className={[styles.contactBtn, className].join(" ")}
      style={contactBtnStyle}
    >
      <b className={styles.telegram}>{telegram}</b>
    </div>
  );
};

export default ContactBtn;
