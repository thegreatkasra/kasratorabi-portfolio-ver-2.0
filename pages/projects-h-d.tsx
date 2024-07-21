import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderTop from "../components/header-top";
import styles from "./projects-h-d.module.css";

const ProjectsHD: NextPage = () => {
  const router = useRouter();

  const onAboutUsTextClick = useCallback(() => {
    router.push("/aboutme-h-d");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contact-h-d");
  }, [router]);

  const onFrameClick = useCallback(() => {
    window.open("https://www.behance.net/kasratorabi1");
  }, []);

  return (
    <div className={styles.projectshd}>
      <div className={styles.bg}>
        <img className={styles.bgIcon} alt="" src="/bg.svg" />
      </div>
      <HeaderTop
        onAboutUsTextClick={onAboutUsTextClick}
        onContactTextClick={onContactTextClick}
      />
      <div className={styles.uberFoodParent}>
        <b className={styles.uberFood}>1.Uber Food</b>
        <b className={styles.uberFood}>2.Fenty Beauty Redesign</b>
        <b className={styles.uberFood}>3.NikaFilm</b>
      </div>
      <div className={styles.projectshdInner}>
        <img
          className={styles.frameChild}
          alt=""
          src="/frame-6.svg"
          onClick={onFrameClick}
        />
      </div>
    </div>
  );
};

export default ProjectsHD;
