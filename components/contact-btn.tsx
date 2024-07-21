import type { NextPage } from "next";
import { type CSSProperties } from "react";
import styled from "styled-components";

export type ContactBtnType = {
  className?: string;
  telegram?: string;

  /** Style props */
  contactBtnAlignSelf?: CSSProperties["alignSelf"];
};

const Telegram = styled.b`
  position: relative;
`;
const ContactBtnRoot = styled.div<{
  contactBtnAlignSelf?: CSSProperties["alignSelf"];
}>`
  border-radius: var(--br-28xl);
  border: 2px solid var(--full-white);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-lg) var(--padding-75xl);
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-white);
  font-family: var(--font-roboto-mono);
  align-self: ${(p) => p.contactBtnAlignSelf};
`;

const ContactBtn: NextPage<ContactBtnType> = ({
  className = "",
  telegram,
  contactBtnAlignSelf,
}) => {
  return (
    <ContactBtnRoot
      contactBtnAlignSelf={contactBtnAlignSelf}
      className={className}
    >
      <Telegram>{telegram}</Telegram>
    </ContactBtnRoot>
  );
};

export default ContactBtn;