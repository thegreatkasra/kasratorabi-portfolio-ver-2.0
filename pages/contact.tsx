import type { NextPage } from "next";
import ContactBtn from "../components/contact-btn";
import Header from "../components/header";
import Form from "../components/form";
import styles from "./contact.module.css";

const Contact: NextPage = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.frame}>
        <div className={styles.contactBtnParent}>
          <ContactBtn telegram="Email" contactBtnAlignSelf="stretch" />
          <ContactBtn telegram="Telegram" contactBtnAlignSelf="stretch" />
          <ContactBtn telegram="Instagram" contactBtnAlignSelf="stretch" />
        </div>
      </div>
      <div className={styles.frame1}>
        <div className={styles.frame2}>
          <div className={styles.frame3}>
            <Header
              logoLeft="0px"
              logoWidth="unset"
              logoOverflow="unset"
              logoPadding="unset"
              logoGap="67px"
              logoPosition="absolute"
              logoTop="0px"
            />
          </div>
          <div className={styles.frame4}>
            <Form frameDivTop="70px" frameDivLeft="0px" />
          </div>
        </div>
        <div className={styles.frame5}>
          <div className={styles.frame6}>
            <div className={styles.oRParent}>
              <b className={styles.oR}>
                <p className={styles.o}>O</p>
                <p className={styles.o}>R</p>
              </b>
              <div className={styles.group}>
                <div className={styles.groupChild} />
                <div className={styles.groupItem} />
              </div>
            </div>
          </div>
          <div className={styles.frame7}>
            <div className={styles.bg}>
              <img className={styles.bgChild} alt="" src="/bg.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
