import type { NextPage } from "next";
import Header from "../components/header";
import styles from "./aboutme1.module.css";

const Aboutme1: NextPage = () => {
  return (
    <div className={styles.aboutme}>
      <div className={styles.frame}>
        <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
        <div className={styles.frame1}>
          <Header
            logoLeft="unset"
            logoWidth="unset"
            logoOverflow="unset"
            logoPadding="unset"
            logoGap="67px"
            logoPosition="unset"
            logoTop="unset"
          />
        </div>
      </div>
      <div className={styles.frame2}>
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
                src="/nodejs-logo3@2x.png"
              />
            </div>
            <div className={styles.div}>
              <div className={styles.css3AndHtml5LogosAndWordm}>
                <div className={styles.layer1}>
                  <img className={styles.g3013Icon} alt="" src="/g3013.svg" />
                  <img className={styles.g3013Icon} alt="" src="/g30542.svg" />
                </div>
              </div>
            </div>
            <img className={styles.icon} alt="" src="/4.svg" />
            <img className={styles.icon} alt="" src="/4.svg" />
            <div className={styles.div2}>
              <img className={styles.r1Icon} alt="" src="/r-1@2x.png" />
              <img className={styles.r2Icon} alt="" src="/r-1@2x.png" />
            </div>
          </div>
          <div className={styles.parent}>
            <div className={styles.div}>
              <img
                className={styles.figmaLogoIcon}
                alt=""
                src="/figma-logo3.svg"
              />
            </div>
            <img className={styles.icon} alt="" src="/21.svg" />
            <img className={styles.icon} alt="" src="/31.svg" />
            <img className={styles.icon4} alt="" src="/47@2x.png" />
            <img className={styles.icon} alt="" src="/5.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme1;
