/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import SectionDiv from './sharedStyles/sectionDiv.js';
import SectionHeader from './sharedStyles/sectionHeader.js';
import HeaderLine from './sharedStyles/headerLine.js';
import Title from './sharedStyles/sectionTitle.js';
import ProjectCard from './ProjectsCard.jsx';
import { projectData } from '../data/projects.js';

const ProjectsList = () => {
  const projects = projectData.map((project, i) => <ProjectCard key={i} project={project} />);

  return (
    <SectionDiv id="projects" style={{ background: '#FEC200' }}>
      <SectionHeader>
        <Title>Featured Projects</Title>
        <HeaderLine />
      </SectionHeader>
      <ProjectsContainer>{projects}</ProjectsContainer>
    </SectionDiv>

  );
};

export default ProjectsList;

const ProjectsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 2rem 3rem;
  margin: 0px 10%;
`;
