import type { NextPage } from "next";
import Menu from "../components/menu";
import styles from "./android-contact.module.css";

const AndroidContact: NextPage = () => {
  return (
    <div className={styles.androidcontact}>
      <img className={styles.bgIcon} alt="" src="/bg2.svg" />
      <div className={styles.top}>
        <div className={styles.logo}>
          <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          <b className={styles.kasraTorabi}>Kasra Torabi</b>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.emailRequiredParent}>
          <b className={styles.emailRequired}>Email: (Required)</b>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.fullNameRequiredParent}>
          <b className={styles.emailRequired}>Full Name: (Required)</b>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.companyParent}>
          <b className={styles.emailRequired}>Company:</b>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.subjectParent}>
          <b className={styles.emailRequired}>Subject:</b>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.messageParent}>
          <b className={styles.emailRequired}>Message:</b>
          <div className={styles.frameChild1} />
        </div>
        <div className={styles.sendWrapper}>
          <b className={styles.send}>SEND</b>
        </div>
      </div>
      <b className={styles.ifYouAre}>
        If you are interested in collaborating with me and like my work, you can
        contact me through one of the methods below :
      </b>
      <div className={styles.lineParent}>
        <div className={styles.lineDiv} />
        <div className={styles.frameChild2} />
        <b className={styles.or}>OR</b>
      </div>
      <div className={styles.contactBtn}>
        <b className={styles.email}>Email</b>
      </div>
      <div className={styles.contactBtn1}>
        <b className={styles.email}>Telegram</b>
      </div>
      <div className={styles.contactBtn2}>
        <b className={styles.email}>Instagram</b>
      </div>
      <Menu contactTop="39px" />
    </div>
  );
};

export default AndroidContact;
