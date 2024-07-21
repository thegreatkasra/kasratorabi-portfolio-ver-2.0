import type { NextPage } from "next";
import { useCallback } from "react";
import styled from "styled-components";
import FrameComponent from "../components/frame-component";
import Menu from "../components/menu";

const BgIcon = styled.img`
  position: absolute;
  top: -36px;
  left: -165px;
  width: 430px;
  height: 138px;
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 4.9px;
  left: 0px;
  width: 18px;
  height: 24.7px;
`;
const KasraTorabi = styled.b`
  position: absolute;
  top: 8.2px;
  left: 26.4px;
`;
const Logo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 127px;
  height: 34.7px;
`;
const Top1 = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 127px;
  height: 35px;
`;
const FrameChild = styled.img`
  width: 28.8px;
  position: relative;
  height: 28.8px;
  cursor: pointer;
`;
const AndroidProjectsInner = styled.div`
  position: absolute;
  bottom: 0.2px;
  left: calc(50% - 27px);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 12.5px;
`;
const AndroidProjectsRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  height: 800px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-sm-9);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const AndroidProjects: NextPage = () => {
  const onFrameIconClick = useCallback(() => {
    window.open("https://www.behance.net/kasratorabi1");
  }, []);

  return (
    <AndroidProjectsRoot>
      <BgIcon alt="" src="/bg1.svg" />
      <Top1>
        <Logo>
          <VectorIcon alt="" src="/vector1.svg" />
          <KasraTorabi>Kasra Torabi</KasraTorabi>
        </Logo>
      </Top1>
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
      <AndroidProjectsInner>
        <FrameChild alt="" src="/frame-61.svg" onClick={onFrameIconClick} />
      </AndroidProjectsInner>
      <Menu contactTop="32px" />
    </AndroidProjectsRoot>
  );
};

export default AndroidProjects;