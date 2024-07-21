import type { NextPage } from "next";
import { useCallback } from "react";
import FrameComponent from "../components/frame-component";
import Menu from "../components/menu";
import styles from "./android-projects.module.css";

const AndroidProjects: NextPage = () => {
  const onFrameIconClick = useCallback(() => {
    window.open("https://www.behance.net/kasratorabi1");
  }, []);

  return (
    <div className={styles.androidProjects}>
      <img className={styles.bgIcon} alt="" src="/bg1.svg" />
      <div className={styles.top}>
        <div className={styles.logo}>
          <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          <b className={styles.kasraTorabi}>Kasra Torabi</b>
        </div>
      </div>
      <FrameComponent
        rectangle4="/rectangle-4@2x.png"
        title="Uber Food"
        frameDivPosition="absolute"
        frameDivTop="139px"
        frameDivLeft="calc(50% - 156px)"
      />
      <FrameComponent
        rectangle4="/rectangle-41@2x.png"
        title="Fenty Beauty Redesign"
        frameDivPosition="absolute"
        frameDivTop="328px"
        frameDivLeft="calc(50% - 156px)"
      />
      <FrameComponent
        rectangle4="/rectangle-42@2x.png"
        title="NikaFilm"
        frameDivPosition="absolute"
        frameDivTop="517px"
        frameDivLeft="calc(50% - 156px)"
      />
      <div className={styles.androidProjectsInner}>
        <img
          className={styles.frameChild}
          alt=""
          src="/frame-61.svg"
          onClick={onFrameIconClick}
        />
      </div>
      <Menu contactTop="32px" />
    </div>
  );
};

export default AndroidProjects;
