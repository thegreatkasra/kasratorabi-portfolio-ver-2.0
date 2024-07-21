import type { NextPage } from "next";
import styled from "styled-components";
import MainHeader from "../components/main-header";
import Skil1 from "../components/skil1";
import Skil from "../components/skil";

const BgChild = styled.div`
  position: absolute;
  top: 73px;
  left: 0px;
  filter: blur(39.6px);
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  width: 1440px;
  height: 1024px;
`;
const BgItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  filter: blur(200px);
  border-radius: 50%;
  background-color: var(--color-goldenrod);
  width: 1143px;
  height: 237px;
`;
const Bg = styled.div`
  position: absolute;
  top: -73px;
  left: 0px;
  width: 1440px;
  height: 1097px;
`;
const SpliterIcon = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 41px;
  flex-shrink: 0;
`;
const Skils = styled.div`
  position: absolute;
  top: 624px;
  left: 0px;
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Hi = styled.span``;
const Figma = styled.span`
  background: linear-gradient(
    -89.67deg,
    #ff7262,
    #a259ff 36.5%,
    #1abcfe 70%,
    #0acf83
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const And = styled.span`
  color: var(--full-white);
`;
const AdobeXd = styled.span`
  color: #ff61f6;
`;
const Spline = styled.span`
  background: linear-gradient(
    90deg,
    #fec31d,
    #3bffc5 33.33%,
    #417fff 66.67%,
    #fe3af3
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Blender = styled.span`
  color: #f5792a;
`;
const AfterEffects = styled.span`
  color: #9999ff;
`;
const ImKasraTorabiAPassiona = styled.span`
  font-size: var(--font-size-5xl);
`;
const HiImKasraContainer = styled.div`
  width: 832px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  height: 344px;
  flex-shrink: 0;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const FrameChild = styled.img`
  width: 390px;
  position: relative;
  height: 390px;
`;
const ContainerParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 57px;
`;
const AboutmeInner = styled.div`
  position: absolute;
  top: 154px;
  left: 80.5px;
  width: 1275px;
  height: 390px;
`;
const AboutmeRoot = styled.div`
  width: 100%;
  position: relative;
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-29xl);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const Aboutme: NextPage = () => {
  return (
    <AboutmeRoot>
      <Bg>
        <BgChild />
        <BgItem />
      </Bg>
      <MainHeader />
      <Skils>
        <Skil1 />
        <SpliterIcon alt="" src="/spliter.svg" />
        <Skil />
      </Skils>
      <AboutmeInner>
        <ContainerParent>
          <Container>
            <HiImKasraContainer>
              <Hi>
                <Hi>Hi</Hi>
              </Hi>
              <ImKasraTorabiAPassiona>
                <Hi>{`, I'm “Kasra Torabi”, a passionate UI/UX designer skilled in `}</Hi>
                <Figma>Figma</Figma>
                <And>{` and `}</And>
                <AdobeXd>Adobe XD</AdobeXd>
                <And>{`. I specialize in creating interactive and visually stunning 3D objects using `}</And>
                <Spline>Spline</Spline>
                <And>{` and `}</And>
                <Blender>Blender</Blender>
                <Hi>{`. My expertise extends to designing immersive 3D websites and applications that captivate users. Additionally, I bring UI elements to life with motion graphics crafted in `}</Hi>
                <AfterEffects>After Effects</AfterEffects>
                <And>{`. With a keen eye for detail and a commitment to user-centered design, I strive to deliver exceptional digital experiences. `}</And>
              </ImKasraTorabiAPassiona>
            </HiImKasraContainer>
          </Container>
          <FrameChild alt="" src="/frame-2.svg" />
        </ContainerParent>
      </AboutmeInner>
    </AboutmeRoot>
  );
};

export default Aboutme;