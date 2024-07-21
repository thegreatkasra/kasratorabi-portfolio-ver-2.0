import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderTop from "../components/header-top";
import Form from "../components/form";
import ContactBtn from "../components/contact-btn";
import styles from "./contact-h-d.module.css";

const ContactHD: NextPage = () => {
  const router = useRouter();

  const onProjectsTextClick = useCallback(() => {
    router.push("/projects-h-d");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/aboutme-h-d");
  }, [router]);

  return (
    <div className={styles.contacthd}>
      <div className={styles.bg}>
        <img className={styles.bgIcon} alt="" src="/bg.svg" />
      </div>
      <HeaderTop
        onProjectsTextClick={onProjectsTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
      />
      <Form />
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <b className={styles.oR}>
          <p className={styles.o}>O</p>
          <p className={styles.o}>R</p>
        </b>
      </div>
      <div className={styles.contactBtnParent}>
        <ContactBtn telegram="Email" contactBtnAlignSelf="stretch" />
        <ContactBtn telegram="Telegram" contactBtnAlignSelf="stretch" />
        <ContactBtn telegram="Instagram" contactBtnAlignSelf="stretch" />
      </div>
    </div>
  );
};

export default ContactHD;
