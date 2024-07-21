import type { NextPage } from "next";
import ContainerWrapper from "../components/container-wrapper";
import Menu from "../components/menu";
import styles from "./android-aboutme.module.css";

const AndroidAboutme: NextPage = () => {
  return (
    <div className={styles.androidAboutme}>
      <div className={styles.bg}>
        <img className={styles.bgChild} alt="" src="/ellipse-3.svg" />
        <img className={styles.img13062Icon} alt="" src="/img-1306-2@2x.png" />
      </div>
      <div className={styles.top}>
        <div className={styles.logo}>
          <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          <b className={styles.kasraTorabi}>Kasra Torabi</b>
        </div>
      </div>
      <div className={styles.text2}>
        <b className={styles.uiUx}>Ui / Ux Designer</b>
      </div>
      <div className={styles.container}>
        <div className={styles.hiImKasraContainer}>
          <span>Hi</span>
          <span
            className={styles.imKasraTorabi}
          >{`, I'm “Kasra Torabi”, a passionate UI/UX designer skilled in Figma and Adobe XD. I specialize in creating interactive and visually stunning 3D objects using Spline and Blender. My expertise extends to designing immersive 3D websites and applications that captivate users. Additionally, I bring UI elements to life with motion graphics crafted in After Effects. With a keen eye for detail and a commitment to user-centered design, I strive to deliver exceptional digital experiences. `}</span>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <div className={styles.div}>
            <img
              className={styles.figmaLogoIcon}
              alt=""
              src="/figma-logo1.svg"
            />
          </div>
          <img className={styles.icon} alt="" src="/22.svg" />
          <img className={styles.icon} alt="" src="/32.svg" />
          <img className={styles.icon2} alt="" src="/43@2x.png" />
          <img className={styles.icon} alt="" src="/52.svg" />
        </div>
        <div className={styles.skills}>
          <ContainerWrapper />
        </div>
      </div>
      <Menu contactTop="33px" />
    </div>
  );
};

export default AndroidAboutme;
