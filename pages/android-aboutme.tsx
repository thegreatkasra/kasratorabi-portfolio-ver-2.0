import type { NextPage } from "next";
import styled from "styled-components";
import ContainerWrapper from "../components/container-wrapper";
import Menu from "../components/menu";

const BgChild = styled.img`
  position: absolute;
  top: 8px;
  left: 78px;
  width: 382px;
  height: 122px;
`;
const Img13062Icon = styled.img`
  position: absolute;
  top: 301px;
  left: 167px;
  width: 356px;
  height: 539px;
  object-fit: cover;
  opacity: 0.2;
  mix-blend-mode: linear-burn;
`;
const Bg = styled.div`
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
  width: 164px;
  height: 35px;
`;
const UiUx = styled.b`
  flex: 1;
  position: relative;
`;
const Text1 = styled.div`
  position: absolute;
  bottom: 24px;
  left: calc(50% - 176px);
  width: 352px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-11xs) var(--padding-xs);
  box-sizing: border-box;
  opacity: 0.5;
  font-size: var(--font-size-15xl-1);
`;
const Hi = styled.span``;
const ImKasraTorabi = styled.span`
  font-size: var(--font-size-xs);
`;
const HiImKasraContainer = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  font-weight: 500;
`;
const Container = styled.div`
  position: absolute;
  top: 104.5px;
  left: 24px;
  width: 256px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--font-size-21xl);
`;
const FigmaLogoIcon = styled.img`
  position: absolute;
  top: calc(50% - 9.85px);
  left: calc(50% - 6.75px);
  width: 13.1px;
  height: 19.7px;
  overflow: hidden;
`;
const Div = styled.div`
  align-self: stretch;
  position: relative;
  height: 30.9px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Icon = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 30.9px;
  flex-shrink: 0;
`;
const Icon1 = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 30.9px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Parent1 = styled.div`
  width: 72.5px;
  height: 201.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs-8);
`;
const Skills = styled.div`
  width: 72.5px;
  position: relative;
  height: 201.8px;
  opacity: 0.8;
`;
const FrameParent = styled.div`
  position: absolute;
  right: 26px;
  bottom: 138.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const AndroidAboutmeRoot = styled.div`
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

const AndroidAboutme: NextPage = () => {
  return (
    <AndroidAboutmeRoot>
      <Bg>
        <BgChild alt="" src="/ellipse-3.svg" />
        <Img13062Icon alt="" src="/img-1306-2@2x.png" />
      </Bg>
      <Top1>
        <Logo>
          <VectorIcon alt="" src="/vector1.svg" />
          <KasraTorabi>Kasra Torabi</KasraTorabi>
        </Logo>
      </Top1>
      <Text1>
        <UiUx>Ui / Ux Designer</UiUx>
      </Text1>
      <Container>
        <HiImKasraContainer>
          <Hi>Hi</Hi>
          <ImKasraTorabi>{`, I'm “Kasra Torabi”, a passionate UI/UX designer skilled in Figma and Adobe XD. I specialize in creating interactive and visually stunning 3D objects using Spline and Blender. My expertise extends to designing immersive 3D websites and applications that captivate users. Additionally, I bring UI elements to life with motion graphics crafted in After Effects. With a keen eye for detail and a commitment to user-centered design, I strive to deliver exceptional digital experiences. `}</ImKasraTorabi>
        </HiImKasraContainer>
      </Container>
      <FrameParent>
        <Parent1>
          <Div>
            <FigmaLogoIcon alt="" src="/figma-logo1.svg" />
          </Div>
          <Icon alt="" src="/22.svg" />
          <Icon alt="" src="/32.svg" />
          <Icon1 alt="" src="/43@2x.png" />
          <Icon alt="" src="/52.svg" />
        </Parent1>
        <Skills>
          <ContainerWrapper />
        </Skills>
      </FrameParent>
      <Menu contactTop="33px" />
    </AndroidAboutmeRoot>
  );
};

export default AndroidAboutme;