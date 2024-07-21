import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import HeaderTop from "../components/header-top";
import Form from "../components/form";
import ContactBtn from "../components/contact-btn";

const BgIcon = styled.img`
  width: 1353px;
  position: relative;
  height: 433px;
`;
const Bg = styled.div`
  position: absolute;
  top: -255px;
  left: 134px;
  width: 1353px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const FrameChild = styled.div`
  position: absolute;
  top: -1px;
  left: calc(50% - 1.5px);
  background-color: var(--full-white);
  border-right: 2px solid var(--full-white);
  box-sizing: border-box;
  width: 2px;
  height: 355px;
  opacity: 0.5;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 446px;
  left: calc(50% - 1.5px);
  background-color: var(--full-white);
  border-right: 2px solid var(--full-white);
  box-sizing: border-box;
  width: 2px;
  height: 324px;
  opacity: 0.5;
`;
const O = styled.p`
  margin: 0;
`;
const OR = styled.b`
  position: absolute;
  top: 366px;
  left: 0px;
  opacity: 0.5;
`;
const LineParent = styled.div`
  position: absolute;
  top: calc(50% - 385px);
  left: calc(50% - 7px);
  width: 15px;
  height: 769px;
`;
const ContactBtnParent = styled.div`
  position: absolute;
  top: 360px;
  right: 318px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-59xl);
`;
const ContacthdRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  height: 1080px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const ContactHD: NextPage = () => {
  const router = useRouter();

  const onProjectsTextClick = useCallback(() => {
    router.push("/projects-h-d");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/aboutme-h-d");
  }, [router]);

  return (
    <ContacthdRoot>
      <Bg>
        <BgIcon alt="" src="/bg.svg" />
      </Bg>
      <HeaderTop
        onProjectsTextClick={onProjectsTextClick}
        onAboutUsTextClick={onAboutUsTextClick}
      />
      <Form />
      <LineParent>
        <FrameChild />
        <FrameItem />
        <OR>
          <O>O</O>
          <O>R</O>
        </OR>
      </LineParent>
      <ContactBtnParent>
        <ContactBtn telegram="Email" contactBtnAlignSelf="stretch" />
        <ContactBtn telegram="Telegram" contactBtnAlignSelf="stretch" />
        <ContactBtn telegram="Instagram" contactBtnAlignSelf="stretch" />
      </ContactBtnParent>
    </ContacthdRoot>
  );
};

export default ContactHD;