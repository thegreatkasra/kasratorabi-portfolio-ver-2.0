import type { NextPage } from "next";
import styled from "styled-components";

export type ContainerWrapperType = {
  className?: string;
};

const NodejsLogoIcon = styled.img`
  position: absolute;
  top: calc(50% - 9.85px);
  left: calc(50% - 16px);
  width: 32.1px;
  height: 19.7px;
  overflow: hidden;
  object-fit: cover;
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
const R1Icon = styled.img`
  position: absolute;
  top: 5.6px;
  left: 26.2px;
  width: 19.7px;
  height: 19.7px;
  object-fit: cover;
`;
const ParentRoot = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 72px;
  height: 201.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs-8);
`;

const ContainerWrapper: NextPage<ContainerWrapperType> = ({
  className = "",
}) => {
  return (
    <ParentRoot className={className}>
      <Div>
        <NodejsLogoIcon alt="" src="/nodejs-logo1@2x.png" />
      </Div>
      <Icon alt="" src="/33.svg" />
      <Icon alt="" src="/44.svg" />
      <Icon alt="" src="/44.svg" />
      <Div>
        <R1Icon alt="" src="/r-11@2x.png" />
        <R1Icon alt="" src="/r-11@2x.png" />
      </Div>
    </ParentRoot>
  );
};

export default ContainerWrapper;