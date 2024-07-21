import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderTop from "../components/header-top";
import styles from "./aboutme-h-d.module.css";

const AboutmeHD: NextPage = () => {
  const router = useRouter();

  const onProjectsTextClick = useCallback(() => {
    router.push("/projects-h-d");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contact-h-d");
  }, [router]);

  return (
    <div className={styles.aboutmehd}>
      <div className={styles.bg}>
        <div className={styles.bg1}>
          <img className={styles.bgChild} alt="" src="/bg.svg" />
          <img
            className={styles.img13061Icon}
            alt=""
            src="/img-1306-1@2x.png"
          />
        </div>
      </div>
      <HeaderTop
        onProjectsTextClick={onProjectsTextClick}
        onContactTextClick={onContactTextClick}
      />
      <div className={styles.container}>
        <div className={styles.hiImKasraContainer}>
          <span>Hi</span>
          <span
            className={styles.imKasraTorabi}
          >{`, I'm “Kasra Torabi”, a passionate UI/UX designer skilled in Figma and Adobe XD. I specialize in creating interactive and visually stunning 3D objects using Spline and Blender. My expertise extends to designing immersive 3D websites and applications that captivate users. Additionally, I bring UI elements to life with motion graphics crafted in After Effects. With a keen eye for detail and a commitment to user-centered design, I strive to deliver exceptional digital experiences. `}</span>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.parent}>
          <div className={styles.div}>
            <img
              className={styles.nodejsLogoIcon}
              alt=""
              src="/nodejs-logo@2x.png"
            />
          </div>
          <div className={styles.div}>
            <div className={styles.css3AndHtml5LogosAndWordm}>
              <div className={styles.layer1}>
                <img className={styles.g3013Icon} alt="" src="/g3013.svg" />
                <img className={styles.g3054Icon} alt="" src="/g3054.svg" />
              </div>
            </div>
          </div>
          <img className={styles.icon} alt="" src="/4.svg" />
          <img className={styles.icon} alt="" src="/4.svg" />
          <div className={styles.div}>
            <img className={styles.r1Icon} alt="" src="/r-1@2x.png" />
            <img className={styles.r1Icon} alt="" src="/r-1@2x.png" />
          </div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>
            <img
              className={styles.figmaLogoIcon}
              alt=""
              src="/figma-logo.svg"
            />
          </div>
          <img className={styles.icon} alt="" src="/21.svg" />
          <img className={styles.icon} alt="" src="/31.svg" />
          <img className={styles.icon4} alt="" src="/42@2x.png" />
          <img className={styles.icon} alt="" src="/5.svg" />
        </div>
      </div>
    </div>
  );
};

export default AboutmeHD;
