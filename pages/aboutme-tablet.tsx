import type { NextPage } from "next";
import Property1H from "../components/property1-h";
import styles from "./aboutme-tablet.module.css";

const AboutmeTablet: NextPage = () => {
  return (
    <div className={styles.aboutmeTablet}>
      <div className={styles.bg}>
        <img className={styles.bgChild} alt="" src="/ellipse-31.svg" />
        <img className={styles.img13061Icon} alt="" src="/img-1306-11@2x.png" />
      </div>
      <div className={styles.navTabletParent}>
        <Property1H
          property1HPosition="absolute"
          property1HTop="-1px"
          property1HLeft="253px"
        />
        <div className={styles.logo}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <b className={styles.kasraTorabi}>Kasra Torabi</b>
        </div>
      </div>
      <div className={styles.freshParent}>
        <div className={styles.fresh}>Fresh</div>
        <div className={styles.fresh}>Modern</div>
        <div className={styles.fresh}>High quality</div>
      </div>
      <div className={styles.text2}>
        <b className={styles.uiDesignerUx}>Ui Designer Ux Researcher</b>
      </div>
      <div className={styles.container}>
        <div className={styles.hiImKasraContainer}>
          <span>Hi</span>
          <span
            className={styles.imKasraTorabi}
          >{`, I'm “Kasra Torabi”, a passionate UI/UX designer skilled in Figma and Adobe XD. I specialize in creating interactive and visually stunning 3D objects using Spline and Blender. My expertise extends to designing immersive 3D websites and applications that captivate users. Additionally, I bring UI elements to life with motion graphics crafted in After Effects. With a keen eye for detail and a commitment to user-centered design, I strive to deliver exceptional digital experiences. `}</span>
        </div>
      </div>
      <div className={styles.skillsParent}>
        <div className={styles.skills}>
          <div className={styles.parent}>
            <div className={styles.div}>
              <img
                className={styles.nodejsLogoIcon}
                alt=""
                src="/nodejs-logo2@2x.png"
              />
            </div>
            <div className={styles.div}>
              <div className={styles.css3AndHtml5LogosAndWordm}>
                <div className={styles.layer1}>
                  <img className={styles.g3013Icon} alt="" src="/g30131.svg" />
                  <img className={styles.g3054Icon} alt="" src="/g30541.svg" />
                </div>
              </div>
            </div>
            <img className={styles.icon} alt="" src="/45.svg" />
            <img className={styles.icon} alt="" src="/45.svg" />
            <div className={styles.div}>
              <img className={styles.r1Icon} alt="" src="/r-12@2x.png" />
              <img className={styles.r1Icon} alt="" src="/r-12@2x.png" />
            </div>
          </div>
        </div>
        <div className={styles.parent}>
          <div className={styles.div}>
            <img
              className={styles.figmaLogoIcon}
              alt=""
              src="/figma-logo2.svg"
            />
          </div>
          <img className={styles.icon} alt="" src="/23.svg" />
          <img className={styles.icon} alt="" src="/34.svg" />
          <img className={styles.icon4} alt="" src="/46@2x.png" />
          <img className={styles.icon} alt="" src="/53.svg" />
        </div>
      </div>
    </div>
  );
};

export default AboutmeTablet;
