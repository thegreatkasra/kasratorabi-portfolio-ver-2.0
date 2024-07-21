import type { NextPage } from "next";
import { useCallback } from "react";
import styled from "styled-components";
import Property1H1 from "../components/property1-h";
import ProjectCards from "../components/project-cards";
import FrameComponent1 from "../components/frame-component1";

const BgIcon = styled.img`
  position: absolute;
  top: -145px;
  left: -150px;
  width: 906px;
  height: 290px;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 7px;
  left: 0px;
  width: 26px;
  height: 35.5px;
`;
const KasraTorabi = styled.b`
  position: absolute;
  top: 11.8px;
  left: 38px;
`;
const Logo = styled.div`
  position: absolute;
  top: -6px;
  left: 50px;
  width: 183px;
  height: 50px;
`;
const Navbar = styled.div`
  position: absolute;
  top: 38px;
  left: calc(50% - 512px);
  width: 1024px;
  height: 39px;
`;
const FrameChild = styled.img`
  width: 115px;
  position: relative;
  height: 115px;
  cursor: pointer;
`;
const ProjectsTabletInner = styled.div`
  position: absolute;
  bottom: 0px;
  left: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 50px;
`;
const ProjectsTabletRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  height: 1366px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const ProjectsTablet: NextPage = () => {
  const onFrameClick = useCallback(() => {
    window.open("https://www.behance.net/kasratorabi1");
  }, []);

  return (
    <ProjectsTabletRoot>
      <BgIcon alt="" src="/bg3.svg" />
      <Navbar>
        <Property1H1
          property1HPosition="absolute"
          property1HTop="-1px"
          property1HLeft="253px"
        />
        <Logo>
          <VectorIcon alt="" src="/vector.svg" />
          <KasraTorabi>Kasra Torabi</KasraTorabi>
        </Logo>
      </Navbar>
      <ProjectsTabletInner>
        <FrameChild alt="" src="/frame-6.svg" onClick={onFrameClick} />
      </ProjectsTabletInner>
      <ProjectCards uberFood="1.Uber Food" rectangle3="/rectangle-3@2x.png" />
      <ProjectCards
        uberFood="2.Fenty Beauty"
        rectangle3="/rectangle-31@2x.png"
        propTop="409px"
      />
      <FrameComponent1 />
    </ProjectsTabletRoot>
  );
};

export default ProjectsTablet;