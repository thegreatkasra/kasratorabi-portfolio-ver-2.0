import type { NextPage } from 'next';
import 'antd/dist/antd.min.css';
import { Progress } from "antd"
import styled from "styled-components";


export type Projects1Type = {
  className?: string;
}

const ProjectsRoot = styled(Progress)`width: 1440px;
`;


const Projects1:NextPage<Projects1Type> = ({ className="" }) => {
  return (
    <ProjectsRoot percent={1} style={{ width: 1440 }} type="circle" size="small" showInfo={false} / className={className}>);
};

export default Projects1;