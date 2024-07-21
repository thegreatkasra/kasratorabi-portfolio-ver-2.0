import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styled from "styled-components";

export type MenuType = {
  className?: string;

  /** Style props */
  contactTop?: CSSProperties["top"];
};

const IconmonstrHomeThin = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Home = styled.div`
  position: relative;
`;
const Home1 = styled.div`
  position: absolute;
  top: 16px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-11xl);
  gap: var(--gap-5xs);
`;
const About = styled.div`
  width: 43px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const About1 = styled.div`
  position: absolute;
  top: 84px;
  left: -1px;
  width: 123px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xs) var(--padding-11xl);
  box-sizing: border-box;
  gap: var(--gap-5xs);
`;
const Icons8Project = styled.img`
  width: 20px;
  position: relative;
  height: 20px;
  object-fit: cover;
`;
const Project = styled.div`
  width: 63px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const Projects = styled.div`
  position: absolute;
  top: 152px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-mini);
  gap: var(--gap-5xs);
`;
const Contact = styled.div`
  position: absolute;
  top: 236px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-mini);
  gap: var(--gap-5xs);
`;
const NavmenuChild = styled.div`
  position: absolute;
  top: 67.5px;
  left: 4.5px;
  border-top: 1px solid var(--full-white);
  box-sizing: border-box;
  width: 113px;
  height: 1px;
  opacity: 0.5;
`;
const NavmenuItem = styled.div`
  position: absolute;
  top: 135.5px;
  left: 4.5px;
  border-top: 1px solid var(--full-white);
  box-sizing: border-box;
  width: 113px;
  height: 1px;
  opacity: 0.5;
`;
const NavmenuInner = styled.div`
  position: absolute;
  top: 219.5px;
  left: 4.5px;
  border-top: 1px solid var(--full-white);
  box-sizing: border-box;
  width: 113px;
  height: 1px;
  opacity: 0.5;
`;
const Navmenu = styled.div`
  position: absolute;
  top: 42px;
  left: 160px;
  backdrop-filter: blur(10.1px);
  border-radius: var(--br-5xs) 0px 0px var(--br-5xs);
  background-color: var(--color-gray-100);
  width: 121px;
  height: 304px;
`;
const Hamburgericon = styled.img`
  position: absolute;
  height: 3.24%;
  width: 7.7%;
  top: -0.09%;
  right: 52.7%;
  bottom: 96.85%;
  left: 39.61%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const MenuRoot = styled.div<{ contactTop?: CSSProperties["top"] }>`
  position: absolute;
  top: 33px;
  left: 202px;
  width: 282px;
  height: 346px;
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
  top: ${(p) => p.contactTop};
`;

const Menu: NextPage<MenuType> = ({ className = "", contactTop }) => {
  return (
    <MenuRoot contactTop={contactTop} className={className}>
      <Navmenu>
        <Home1>
          <IconmonstrHomeThin alt="" src="/iconmonstrhomethin-1.svg" />
          <Home>Home</Home>
        </Home1>
        <About1>
          <IconmonstrHomeThin alt="" src="/icons8about-1.svg" />
          <About>About</About>
        </About1>
        <Projects>
          <Icons8Project alt="" src="/icons8project50-1-1@2x.png" />
          <Project>Project</Project>
        </Projects>
        <Contact>
          <Icons8Project alt="" src="/icons8contact50-1@2x.png" />
          <Project>Contact</Project>
        </Contact>
        <NavmenuChild />
        <NavmenuItem />
        <NavmenuInner />
      </Navmenu>
      <Hamburgericon alt="" src="/hamburgericon.svg" />
    </MenuRoot>
  );
};

export default Menu;