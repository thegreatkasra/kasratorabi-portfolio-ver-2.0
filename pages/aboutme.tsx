import type { NextPage } from "next";
import MainHeader from "../components/main-header";
import Skil1 from "../components/skil1";
import Skil from "../components/skil";
import styles from "./aboutme.module.css";

const Aboutme: NextPage = () => {
  return (
    <div className={styles.aboutme}>
      <div className={styles.bg}>
        <div className={styles.bgChild} />
        <div className={styles.bgItem} />
      </div>
      <MainHeader />
      <div className={styles.skils}>
        <Skil1 />
        <img className={styles.spliterIcon} alt="" src="/spliter.svg" />
        <Skil />
      </div>
      <div className={styles.aboutmeInner}>
        <div className={styles.containerParent}>
          <div className={styles.container}>
            <div className={styles.hiImKasraContainer}>
              <span>
                <span>Hi</span>
              </span>
              <span className={styles.imKasraTorabiAPassiona}>
                <span>{`, I'm “Kasra Torabi”, a passionate UI/UX designer skilled in `}</span>
                <span className={styles.figma}>Figma</span>
                <span className={styles.and}>{` and `}</span>
                <span className={styles.adobeXd}>Adobe XD</span>
                <span
                  className={styles.and}
                >{`. I specialize in creating interactive and visually stunning 3D objects using `}</span>
                <span className={styles.spline}>Spline</span>
                <span className={styles.and}>{` and `}</span>
                <span className={styles.blender}>Blender</span>
                <span>{`. My expertise extends to designing immersive 3D websites and applications that captivate users. Additionally, I bring UI elements to life with motion graphics crafted in `}</span>
                <span className={styles.afterEffects}>After Effects</span>
                <span
                  className={styles.and}
                >{`. With a keen eye for detail and a commitment to user-centered design, I strive to deliver exceptional digital experiences. `}</span>
              </span>
            </div>
          </div>
          <img className={styles.frameChild} alt="" src="/frame-2.svg" />
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
