import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/header";

const FrameIcon = styled.img`
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 1016px;
  object-fit: cover;
`;
const Frame = styled.div`
  flex: 1;
  height: 992px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: -1390px;
`;
const Frame1 = styled.div`
  position: absolute;
  top: 4px;
  left: -1px;
  width: 1448px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const Hi = styled.span``;
const ImKasraTorabi = styled.span`
  font-size: var(--font-size-xl);
`;
const HiImKasraContainer = styled.div`
  width: 369px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  height: 647px;
  flex-shrink: 0;
`;
const Container = styled.div`
  width: 702px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  position: undefined;
  margin-top: 55px;
`;
const NodejsLogoIcon = styled.img`
  width: 114.1px;
  position: relative;
  height: 70px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Div = styled.div`
  width: 256px;
  height: 110px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const G3013Icon = styled.img`
  width: 49.6px;
  position: relative;
  height: 70px;
`;
const Layer = styled.div`
  width: 108.2px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 9px;
`;
const Css3AndHtml5LogosAndWordm = styled.div`
  width: 108.2px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 110px;
  flex-shrink: 0;
`;
const R1Icon = styled.img`
  width: 70px;
  position: relative;
  height: 70px;
  object-fit: cover;
`;
const R2Icon = styled.img`
  width: 70px;
  position: relative;
  height: 70px;
  object-fit: cover;
  margin-top: -70px;
`;
const Div1 = styled.div`
  width: 256px;
  height: 110px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 93px;
  box-sizing: border-box;
`;
const Parent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-23xl);
`;
const FigmaLogoIcon = styled.img`
  width: 46.7px;
  position: relative;
  height: 70px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Icon1 = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 110px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Skills = styled.div`
  width: 754px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: undefined;
  margin-top: 36px;
`;
const Frame2 = styled.div`
  position: absolute;
  top: 135px;
  left: 80px;
  width: 1309px;
  height: 754px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 432px;
`;
const AboutmeRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-29xl);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const Aboutme1: NextPage = () => {
  return (
    <AboutmeRoot>
      <Frame1>
        <FrameIcon alt="" src="/frame@2x.png" />
        <Frame>
          <Header
            logoLeft="unset"
            logoWidth="unset"
            logoOverflow="unset"
            logoPadding="unset"
            logoGap="67px"
            logoPosition="unset"
            logoTop="unset"
          />
        </Frame>
      </Frame1>
      <Frame2>
        <Container>
          <HiImKasraContainer>
            <Hi>Hi</Hi>
            <ImKasraTorabi>{`, I'm “Kasra Torabi”, a passionate UI/UX designer skilled in Figma and Adobe XD. I specialize in creating interactive and visually stunning 3D objects using Spline and Blender. My expertise extends to designing immersive 3D websites and applications that captivate users. Additionally, I bring UI elements to life with motion graphics crafted in After Effects. With a keen eye for detail and a commitment to user-centered design, I strive to deliver exceptional digital experiences. `}</ImKasraTorabi>
          </HiImKasraContainer>
        </Container>
        <Skills>
          <Parent1>
            <Div>
              <NodejsLogoIcon alt="" src="/nodejs-logo3@2x.png" />
            </Div>
            <Div>
              <Css3AndHtml5LogosAndWordm>
                <Layer>
                  <G3013Icon alt="" src="/g3013.svg" />
                  <G3013Icon alt="" src="/g30542.svg" />
                </Layer>
              </Css3AndHtml5LogosAndWordm>
            </Div>
            <Icon alt="" src="/4.svg" />
            <Icon alt="" src="/4.svg" />
            <Div1>
              <R1Icon alt="" src="/r-1@2x.png" />
              <R2Icon alt="" src="/r-1@2x.png" />
            </Div1>
          </Parent1>
          <Parent1>
            <Div>
              <FigmaLogoIcon alt="" src="/figma-logo3.svg" />
            </Div>
            <Icon alt="" src="/21.svg" />
            <Icon alt="" src="/31.svg" />
            <Icon1 alt="" src="/47@2x.png" />
            <Icon alt="" src="/5.svg" />
          </Parent1>
        </Skills>
      </Frame2>
    </AboutmeRoot>
  );
};

export default Aboutme1;