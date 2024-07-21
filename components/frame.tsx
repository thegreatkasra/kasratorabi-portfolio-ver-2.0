import type { NextPage } from 'next';
import styled from "styled-components";


export type FrameType = {
  className?: string;
}

const FrameRoot = styled.div`width: 100px;
background-color: var(--color-white);
height: 100px;
overflow: hidden;
`;


const Frame:NextPage<FrameType> = ({ className="" }) => {
  return (
    <FrameRoot / className={className}>);
};

export default Frame;