import type { NextPage } from "next";
import styled from "styled-components";

export type SkilType = {
  className?: string;
};

const AdobeXdLogoIcon = styled.img`
  position: absolute;
  top: 20px;
  left: 92px;
  width: 71.7px;
  height: 70px;
  overflow: hidden;
`;
const Div = styled.div`
  width: 256px;
  position: relative;
  border-right: 2px solid var(--color-4);
  box-sizing: border-box;
  height: 110px;
  overflow: hidden;
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
  width: 256px;
  position: relative;
  height: 110px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Icon1 = styled.img`
  width: 256px;
  position: relative;
  height: 110px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const Applications = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const SkilRoot = styled.div`
  align-self: stretch;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mid) var(--padding-61xl);
`;

const Skil: NextPage<SkilType> = ({ className = "" }) => {
  return (
    <SkilRoot className={className}>
      <Applications>
        <Div>
          <AdobeXdLogoIcon alt="" src="/adobexd-logo.svg" />
        </Div>
        <Div>
          <R1Icon alt="" src="/r-1@2x.png" />
          <R1Icon alt="" src="/r-1@2x.png" />
        </Div>
        <Div>
          <Css3AndHtml5LogosAndWordm>
            <Layer>
              <G3013Icon alt="" src="/g3013.svg" />
              <G3054Icon alt="" src="/g3054.svg" />
            </Layer>
          </Css3AndHtml5LogosAndWordm>
        </Div>
        <Icon alt="" src="/411.svg" />
        <Icon1 alt="" src="/51@2x.png" />
      </Applications>
    </SkilRoot>
  );
};

export default Skil;