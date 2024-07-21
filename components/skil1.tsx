import type { NextPage } from "next";
import styled from "styled-components";

export type Skil1Type = {
  className?: string;
};

const FigmaLogoIcon = styled.img`
  position: absolute;
  top: calc(50% - 35px);
  left: calc(50% - 23px);
  width: 46.7px;
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
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const SkilRoot = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mid) var(--padding-61xl);
`;

const Skil1: NextPage<Skil1Type> = ({ className = "" }) => {
  return (
    <SkilRoot className={className}>
      <Applications>
        <Div>
          <FigmaLogoIcon alt="" src="/figma-logo.svg" />
        </Div>
        <Icon alt="" src="/2.svg" />
        <Icon alt="" src="/3.svg" />
        <Icon1 alt="" src="/41@2x.png" />
        <Icon alt="" src="/5.svg" />
      </Applications>
    </SkilRoot>
  );
};

export default Skil1;