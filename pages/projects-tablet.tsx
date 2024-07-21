import type { NextPage } from "next";
import { useCallback } from "react";
import Property1H1 from "../components/property1-h";
import ProjectCards from "../components/project-cards";
import FrameComponent1 from "../components/frame-component1";
import styles from "./projects-tablet.module.css";

const ProjectsTablet: NextPage = () => {
  const onFrameClick = useCallback(() => {
    window.open("https://www.behance.net/kasratorabi1");
  }, []);

  return (
    <div className={styles.projectsTablet}>
      <img className={styles.bgIcon} alt="" src="/bg3.svg" />
      <div className={styles.navbar}>
        <Property1H1
          property1HPosition="absolute"
          property1HTop="-1px"
          property1HLeft="253px"
        />
        <div className={styles.logo}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <b className={styles.kasraTorabi}>Kasra Torabi</b>
        </div>
      </div>
      <div className={styles.projectsTabletInner}>
        <img
          className={styles.frameChild}
          alt=""
          src="/frame-6.svg"
          onClick={onFrameClick}
        />
      </div>
      <ProjectCards uberFood="1.Uber Food" rectangle3="/rectangle-3@2x.png" />
      <ProjectCards
        uberFood="2.Fenty Beauty"
        rectangle3="/rectangle-31@2x.png"
        propTop="409px"
      />
      <FrameComponent1 />
    </div>
  );
};

export default ProjectsTablet;