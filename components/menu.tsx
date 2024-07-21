import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./menu.module.css";

export type MenuType = {
  className?: string;

  /** Style props */
  contactTop?: CSSProperties["top"];
};

const Menu: NextPage<MenuType> = ({ className = "", contactTop }) => {
  const menuStyle: CSSProperties = useMemo(() => {
    return {
      top: contactTop,
    };
  }, [contactTop]);

  return (
    <div className={[styles.menu, className].join(" ")} style={menuStyle}>
      <div className={styles.navmenu}>
        <div className={styles.home}>
          <img
            className={styles.iconmonstrHomeThin1}
            alt=""
            src="/iconmonstrhomethin-1.svg"
          />
          <div className={styles.home1}>Home</div>
        </div>
        <div className={styles.about}>
          <img
            className={styles.iconmonstrHomeThin1}
            alt=""
            src="/icons8about-1.svg"
          />
          <div className={styles.about1}>About</div>
        </div>
        <div className={styles.projects}>
          <img
            className={styles.icons8Project5011}
            alt=""
            src="/icons8project50-1-1@2x.png"
          />
          <div className={styles.project}>Project</div>
        </div>
        <div className={styles.contact}>
          <img
            className={styles.icons8Project5011}
            alt=""
            src="/icons8contact50-1@2x.png"
          />
          <div className={styles.project}>Contact</div>
        </div>
        <div className={styles.navmenuChild} />
        <div className={styles.navmenuItem} />
        <div className={styles.navmenuInner} />
      </div>
      <img className={styles.hamburgericon} alt="" src="/hamburgericon.svg" />
    </div>
  );
};

export default Menu;
