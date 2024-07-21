import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./project-cards.module.css";

export type ProjectCardsType = {
  className?: string;
  uberFood?: string;
  rectangle3?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
};

const ProjectCards: NextPage<ProjectCardsType> = ({
  className = "",
  uberFood,
  rectangle3,
  propTop,
}) => {
  const projectCardsStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={[styles.projectCards, className].join(" ")}
      style={projectCardsStyle}
    >
      <div className={styles.uberFoodParent}>
        <b className={styles.uberFood}>{uberFood}</b>
        <img className={styles.frameChild} alt="" src={rectangle3} />
      </div>
    </div>
  );
};

export default ProjectCards;
