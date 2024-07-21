import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styled from "styled-components";

export type FormType = {
  className?: string;

  /** Style props */
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
};

const EmailRequired = styled.b`
  align-self: stretch;
  position: relative;
`;
const FrameChild = styled.div`
  align-self: stretch;
  position: relative;
  border-radius: var(--br-xs);
  border: 2px solid var(--full-white);
  box-sizing: border-box;
  height: 45px;
`;
const EmailRequiredParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
`;
const RectangleDiv = styled.div`
  align-self: stretch;
  position: relative;
  border-radius: var(--br-xs);
  border: 2px solid var(--full-white);
  box-sizing: border-box;
  height: 213px;
`;
const Send = styled.b`
  position: relative;
  letter-spacing: 0.65em;
`;
const SendWrapper = styled.div`
  align-self: stretch;
  border-radius: var(--br-base);
  background-color: var(--color-2);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-2xs) var(--padding-169xl);
  font-size: var(--font-size-5xl);
`;
const FormRoot = styled.div<{
  frameDivTop?: CSSProperties["top"];
  frameDivLeft?: CSSProperties["left"];
}>`position: absolute;
  top: 209px;
  left: 240px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-15xl);
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-white);
  font-family: var(--font-roboto-mono);
  top: ${(p) => p.frameDivTop}
  left: ${(p) => p.frameDivLeft}
`;

const Form: NextPage<FormType> = ({
  className = "",
  frameDivTop,
  frameDivLeft,
}) => {
  return (
    <FormRoot
      frameDivTop={frameDivTop}
      frameDivLeft={frameDivLeft}
      className={className}
    >
      <EmailRequiredParent>
        <EmailRequired>Email: (Required)</EmailRequired>
        <FrameChild />
      </EmailRequiredParent>
      <EmailRequiredParent>
        <EmailRequired>Full Name: (Required)</EmailRequired>
        <FrameChild />
      </EmailRequiredParent>
      <EmailRequiredParent>
        <EmailRequired>Company:</EmailRequired>
        <FrameChild />
      </EmailRequiredParent>
      <EmailRequiredParent>
        <EmailRequired>Message:</EmailRequired>
        <RectangleDiv />
      </EmailRequiredParent>
      <SendWrapper>
        <Send>SEND</Send>
      </SendWrapper>
    </FormRoot>
  );
};

export default Form;