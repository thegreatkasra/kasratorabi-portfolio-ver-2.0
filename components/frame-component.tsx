import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styled from "styled-components";

export type FrameComponentType = {
  className?: string;
  rectangle4?: string;
  title?: string;

  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
};

const ComponentChild = styled.img`
  position: absolute;
  top: 0px;
  left: calc(50% - 156px);
  border-radius: var(--br-8xs);
  width: 312px;
  height: 149px;
  object-fit: cover;
`;
const ComponentItem = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 156px);
  border-radius: var(--br-8xs);
  background: linear-gradient(0deg, rgba(6, 6, 6, 0.8), rgba(0, 0, 0, 0));
  width: 312px;
  height: 149px;
`;
const TitleName = styled.b`
  position: absolute;
  top: 115px;
  left: calc(50% - 42px);
`;
const RectangleParentRoot = styled.div<{
  frameDivPosition?: CSSProperties["position"];
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
}>`width: 312px;
  height: 149px;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-white);
  font-family: var(--font-roboto-mono);
  position: ${(p) => p.frameDivPosition}
  top: ${(p) => p.frameDivTop}
  left: ${(p) => p.frameDivLeft}
`;

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  rectangle4,
  title = "Title Name",
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
}) => {
  return (
    <RectangleParentRoot
      frameDivPosition={frameDivPosition}
      frameDivTop={frameDivTop}
      frameDivLeft={frameDivLeft}
      className={className}
    >
      <ComponentChild alt="" src={rectangle4} />
      <ComponentItem />
      <TitleName>{title}</TitleName>
    </RectangleParentRoot>
  );
};

export default FrameComponent;