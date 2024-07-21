import type { NextPage } from "next";
import ContactBtn from "../components/contact-btn";
import styled from "styled-components";
import Header from "../components/header";
import Form from "../components/form";

const ContactBtnParent = styled.div`
  position: absolute;
  top: 56px;
  right: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-59xl);
`;
const Frame = styled.div`
  position: absolute;
  top: 304px;
  left: 922px;
  width: 318px;
  height: 416px;
  overflow: hidden;
`;
const Frame1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1398px;
  height: 1000px;
  overflow: hidden;
`;
const Frame2 = styled.div`
  position: absolute;
  top: 138px;
  left: 70px;
  width: 481px;
  height: 724px;
  overflow: hidden;
`;
const Frame3 = styled.div`
  position: absolute;
  top: 267px;
  left: 0px;
  width: 1398px;
  height: 1000px;
  overflow: hidden;
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
const GroupChild = styled.div`
  position: absolute;
  top: 446px;
  background-color: var(--full-white);
  border-right: 2px solid var(--full-white);
  box-sizing: border-box;
  width: 2px;
  height: 324px;
  opacity: 0.5;
`;
const GroupItem = styled.div`
  position: absolute;
  top: -1px;
  background-color: var(--full-white);
  border-right: 2px solid var(--full-white);
  box-sizing: border-box;
  width: 2px;
  height: 355px;
  opacity: 0.5;
`;
const Group = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 0.5px);
  width: 0px;
  height: 769px;
`;
const ORParent = styled.div`
  position: absolute;
  top: calc(50% - 385px);
  left: calc(50% - 7.5px);
  width: 15px;
  height: 769px;
`;
const Frame4 = styled.div`
  position: absolute;
  top: 382px;
  left: 579px;
  width: 15px;
  height: 770px;
  overflow: hidden;
`;
const BgChild = styled.img`
  width: 1353px;
  position: relative;
  height: 433px;
`;
const Bg = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1353px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Frame5 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1353px;
  height: 1534px;
  overflow: hidden;
`;
const Frame6 = styled.div`
  position: absolute;
  top: 0px;
  left: 84px;
  width: 1353px;
  height: 1534px;
  overflow: hidden;
`;
const Frame7 = styled.div`
  position: absolute;
  top: -255px;
  left: 50px;
  width: 1437px;
  height: 1534px;
  overflow: hidden;
`;
const ContactRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(151.5deg, #e35b0e, #5f0526);
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--full-white);
  font-family: var(--font-roboto-mono);
`;

const Contact: NextPage = () => {
  return (
    <ContactRoot>
      <Frame>
        <ContactBtnParent>
          <ContactBtn telegram="Email" contactBtnAlignSelf="stretch" />
          <ContactBtn telegram="Telegram" contactBtnAlignSelf="stretch" />
          <ContactBtn telegram="Instagram" contactBtnAlignSelf="stretch" />
        </ContactBtnParent>
      </Frame>
      <Frame7>
        <Frame3>
          <Frame1>
            <Header
              logoLeft="0px"
              logoWidth="unset"
              logoOverflow="unset"
              logoPadding="unset"
              logoGap="67px"
              logoPosition="absolute"
              logoTop="0px"
            />
          </Frame1>
          <Frame2>
            <Form frameDivTop="70px" frameDivLeft="0px" />
          </Frame2>
        </Frame3>
        <Frame6>
          <Frame4>
            <ORParent>
              <OR>
                <O>O</O>
                <O>R</O>
              </OR>
              <Group>
                <GroupChild />
                <GroupItem />
              </Group>
            </ORParent>
          </Frame4>
          <Frame5>
            <Bg>
              <BgChild alt="" src="/bg.svg" />
            </Bg>
          </Frame5>
        </Frame6>
      </Frame7>
    </ContactRoot>
  );
};

export default Contact;