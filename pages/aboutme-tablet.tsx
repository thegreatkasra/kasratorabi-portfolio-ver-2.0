import type { NextPage } from "next";
import styled from "styled-components";
import Property1H1 from "../components/property1-h";

const BgChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 906px;
  height: 290px;
`;
const Img13061Icon = styled.img`
  position: absolute;
  top: 145px;
  left: calc(50% - 303px);
  width: 1024px;
  height: 1366px;
  object-fit: cover;
  opacity: 0.2;
  mix-blend-mode: linear-burn;
`;
const Bg = styled.div`
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
const NavTabletParent = styled.div`
  position: absolute;
  top: 38px;
  left: calc(50% - 512px);
  width: 1024px;
  height: 39px;
`;
const Fresh = styled.div`
  position: relative;
  font-weight: 500;
`;
const FreshParent = styled.div`
  position: absolute;
  bottom: 175px;
  left: calc(50% - 411px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-315xl);
  opacity: 0.6;
  font-size: var(--font-size-xs);
`;
const UiDesignerUx = styled.b`
  width: 1024px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
`;
const Text1 = styled.div`
  position: absolute;
  bottom: 50.1px;
  left: calc(50% - 512px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-7xs-3) 0px;
  opacity: 0.4;
  font-size: var(--font-size-49xl-2);
`;
const Hi = styled.span``;
const ImKasraTorabi = styled.span`
  font-size: var(--font-size-xl);
`;
const HiImKasraContainer = styled.div`
  width: 256px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  height: 713px;
  flex-shrink: 0;
`;
const Container = styled.div`
  position: absolute;
  top: calc(50% - 357px);
  left: 50px;
  width: 256px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  font-size: var(--font-size-29xl);
`;
const NodejsLogoIcon = styled.img`
  position: absolute;
  top: calc(50% - 19.65px);
  left: calc(50% - 32.1px);
  width: 64.2px;
  height: 39.4px;
  overflow: hidden;
  object-fit: cover;
`;
const Div = styled.div`
  align-self: stretch;
  position: relative;
  height: 61.9px;
  overflow: hidden;
  flex-shrink: 0;
`;
const G3013Icon = styled.img`
  position: absolute;
  height: 100%;
  width: 45.81%;
  top: 0%;
  right: 54.19%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const G3054Icon = styled.img`
  position: absolute;
  height: 100%;
  width: 45.81%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 54.19%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Layer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
`;
const Css3AndHtml5LogosAndWordm = styled.div`
  position: absolute;
  top: calc(50% - 19.65px);
  left: calc(50% - 30.4px);
  width: 60.9px;
  height: 39.4px;
  overflow: hidden;
`;
const Icon = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 61.9px;
  flex-shrink: 0;
`;
const R1Icon = styled.img`
  position: absolute;
  top: 11.3px;
  left: 52.3px;
  width: 39.4px;
  height: 39.4px;
  object-fit: cover;
`;
const Parent1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 144px;
  height: 403.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xl-6);
`;
const Skills = styled.div`
  position: absolute;
  top: calc(50% + 0.4px);
  right: 0px;
  width: 144px;
  height: 403.5px;
  opacity: 0.8;
`;
const FigmaLogoIcon = styled.img`
  position: absolute;
  top: calc(50% - 19.65px);
  left: calc(50% - 12.9px);
  width: 26.3px;
  height: 39.4px;
  overflow: hidden;
`;
const Icon1 = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  height: 61.9px;
  flex-shrink: 0;
  object-fit: cover;
`;
const SkillsParent = styled.div`
  position: absolute;
  top: calc(50% - 404px);
  right: 50px;
  width: 145px;
  height: 807.8px;
`;
const AboutmeTabletRoot = styled.div`
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

const AboutmeTablet: NextPage = () => {
  return (
    <AboutmeTabletRoot>
      <Bg>
        <BgChild alt="" src="/ellipse-31.svg" />
        <Img13061Icon alt="" src="/img-1306-11@2x.png" />
      </Bg>
      <NavTabletParent>
        <Property1H1
          property1HPosition="absolute"
          property1HTop="-1px"
          property1HLeft="253px"
        />
        <Logo>
          <VectorIcon alt="" src="/vector.svg" />
          <KasraTorabi>Kasra Torabi</KasraTorabi>
        </Logo>
      </NavTabletParent>
      <FreshParent>
        <Fresh>Fresh</Fresh>
        <Fresh>Modern</Fresh>
        <Fresh>High quality</Fresh>
      </FreshParent>
      <Text1>
        <UiDesignerUx>Ui Designer Ux Researcher</UiDesignerUx>
      </Text1>
      <Container>
        <HiImKasraContainer>
          <Hi>Hi</Hi>
          <ImKasraTorabi>{`, I'm “Kasra Torabi”, a passionate UI/UX designer skilled in Figma and Adobe XD. I specialize in creating interactive and visually stunning 3D objects using Spline and Blender. My expertise extends to designing immersive 3D websites and applications that captivate users. Additionally, I bring UI elements to life with motion graphics crafted in After Effects. With a keen eye for detail and a commitment to user-centered design, I strive to deliver exceptional digital experiences. `}</ImKasraTorabi>
        </HiImKasraContainer>
      </Container>
      <SkillsParent>
        <Skills>
          <Parent1>
            <Div>
              <NodejsLogoIcon alt="" src="/nodejs-logo2@2x.png" />
            </Div>
            <Div>
              <Css3AndHtml5LogosAndWordm>
                <Layer>
                  <G3013Icon alt="" src="/g30131.svg" />
                  <G3054Icon alt="" src="/g30541.svg" />
                </Layer>
              </Css3AndHtml5LogosAndWordm>
            </Div>
            <Icon alt="" src="/45.svg" />
            <Icon alt="" src="/45.svg" />
            <Div>
              <R1Icon alt="" src="/r-12@2x.png" />
              <R1Icon alt="" src="/r-12@2x.png" />
            </Div>
          </Parent1>
        </Skills>
        <Parent1>
          <Div>
            <FigmaLogoIcon alt="" src="/figma-logo2.svg" />
          </Div>
          <Icon alt="" src="/23.svg" />
          <Icon alt="" src="/34.svg" />
          <Icon1 alt="" src="/46@2x.png" />
          <Icon alt="" src="/53.svg" />
        </Parent1>
      </SkillsParent>
    </AboutmeTabletRoot>
  );
};

export default AboutmeTablet;