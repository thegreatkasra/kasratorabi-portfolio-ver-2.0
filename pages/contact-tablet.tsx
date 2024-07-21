import type { NextPage } from "next";
import Property1H1 from "../components/property1-h";
import ContactBtn from "../components/contact-btn";
import styles from "./contact-tablet.module.css";

const ContactTablet: NextPage = () => {
  return (
    <div className={styles.contactTablet}>
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
      <div className={styles.contactBtnParent}>
        <ContactBtn telegram="Email" contactBtnAlignSelf="stretch" />
        <ContactBtn telegram="Telegram" contactBtnAlignSelf="stretch" />
        <ContactBtn telegram="Instagram" contactBtnAlignSelf="stretch" />
      </div>
      <img
        className={styles.contactTabletChild}
        alt=""
        src="/frame-10@2x.png"
      />
      <div className={styles.form}>
        <div className={styles.emailRequiredParent}>
          <b className={styles.emailRequired}>Email: (Required)</b>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.fullNameRequiredParent}>
          <b className={styles.emailRequired}>Full Name: (Required)</b>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.emailRequiredParent}>
          <b className={styles.emailRequired}>Company:</b>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.emailRequiredParent}>
          <b className={styles.emailRequired}>Subject:</b>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.messageParent}>
          <b className={styles.message}>Message:</b>
          <div className={styles.frameChild1} />
        </div>
        <div className={styles.sendWrapper}>
          <b className={styles.send}>SEND</b>
        </div>
      </div>
    </div>
  );
};

export default ContactTablet;