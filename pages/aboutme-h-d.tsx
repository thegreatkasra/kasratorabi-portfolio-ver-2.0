import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import HeaderTop from "../components/header-top";

const BgChild = styled.img`
  position: absolute;
  top: 0px;
  left: 1294px;
  width: 1353px;
  height: 433px;
`;
const Img13061Icon = styled.img`
  position: absolute;
  top: 255px;
  left: calc(50% - 1323.5px);
  width: 2329px;
  height: 1090px;
  object-fit: cover;
  opacity: 0.2;
  mix-blend-mode: linear-burn;
`;
const Bg = styled.div`
  position: absolute;
  top: 0px;
  left: -360px;
  width: 2647px;
  height: 1345px;
`;
const Bg1 = styled.div`
  position: absolute;
  top: -255px;
  left: 134px;
  width: 1353px;
  height: 1090px;
`;
const Hi = styled.span``;
const ImKasraTorabi = styled.span`
  font-size: var(--font-size-xl);
`;
const HiImKasraContainer = styled.div`
  width: 428px;
  position: relative;
  font-weight: 500;
  display: inline-block;
  height: 647px;
  flex-shrink: 0;
`;
const Container = styled.div`
  position: absolute;
  top: 216px;
  left: 80px;
  width: 406px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;
const NodejsLogoIcon = styled.img`
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 57px);
  width: 114.1px;
  height: 70px;
  overflow: hidden;
  object-fit: cover;
`;
const Div = styled.div`
  align-self: stretch;
  position: relative;
  height: 110px;
  overflow: hidden;
  flex-shrink: 0;
`;
const G3013Icon = styled.img`
  position: absolute;
  height: 100%;
  width: 45.84%;
  top: 0%;
  right: 54.16%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const G3054Icon = styled.img`
  position: absolute;
  height: 100%;
  width: 45.84%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 54.16%;
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
  top: calc(50% - 35px);
  left: calc(50% - 54px);
  width: 108.2px;
  height: 70px;
  overflow: hidden;
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
  position: absolute;
  top: 20px;
  left: 93px;
  width: 70px;
  height: 70px;
  object-fit: cover;
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
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 23px);
  width: 46.7px;
  height: 70px;
  overflow: hidden;
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
  position: absolute;
  top: 216px;
  right: 81px;
  width: 512px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const AboutmehdRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  height: 1080px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-29xl);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const AboutmeHD: NextPage = () => {
  const router = useRouter();

  const onProjectsTextClick = useCallback(() => {
    router.push("/projects-h-d");
  }, [router]);

  const onContactTextClick = useCallback(() => {
    router.push("/contact-h-d");
  }, [router]);

  return (
    <AboutmehdRoot>
      <Bg1>
        <Bg>
          <BgChild alt="" src="/bg.svg" />
          <Img13061Icon alt="" src="/img-1306-1@2x.png" />
        </Bg>
      </Bg1>
      <HeaderTop
        onProjectsTextClick={onProjectsTextClick}
        onContactTextClick={onContactTextClick}
      />
      <Container>
        <HiImKasraContainer>
          <Hi>Hi</Hi>
          <ImKasraTorabi>{`, I'm “Kasra Torabi”, a passionate UI/UX designer skilled in Figma and Adobe XD. I specialize in creating interactive and visually stunning 3D objects using Spline and Blender. My expertise extends to designing immersive 3D websites and applications that captivate users. Additionally, I bring UI elements to life with motion graphics crafted in After Effects. With a keen eye for detail and a commitment to user-centered design, I strive to deliver exceptional digital experiences. `}</ImKasraTorabi>
        </HiImKasraContainer>
      </Container>
      <Skills>
        <Parent1>
          <Div>
            <NodejsLogoIcon alt="" src="/nodejs-logo@2x.png" />
          </Div>
          <Div>
            <Css3AndHtml5LogosAndWordm>
              <Layer>
                <G3013Icon alt="" src="/g3013.svg" />
                <G3054Icon alt="" src="/g3054.svg" />
              </Layer>
            </Css3AndHtml5LogosAndWordm>
          </Div>
          <Icon alt="" src="/4.svg" />
          <Icon alt="" src="/4.svg" />
          <Div>
            <R1Icon alt="" src="/r-1@2x.png" />
            <R1Icon alt="" src="/r-1@2x.png" />
          </Div>
        </Parent1>
        <Parent1>
          <Div>
            <FigmaLogoIcon alt="" src="/figma-logo.svg" />
          </Div>
          <Icon alt="" src="/21.svg" />
          <Icon alt="" src="/31.svg" />
          <Icon1 alt="" src="/42@2x.png" />
          <Icon alt="" src="/5.svg" />
        </Parent1>
      </Skills>
    </AboutmehdRoot>
  );
};

export default AboutmeHD;