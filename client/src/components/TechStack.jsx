// import React from 'react';
// import styled from 'styled-components';

// const TechStack = () => (
//   <SectionDiv style={{background: '#304430'}}>
//     TechStack Here
//   </SectionDiv>
// );

// export default TechStack;

// #244B37' -- greenish
// #E1E4EB --- off white
// #343A40 --- Navbar grey

// #304430 green*

import React from 'react';
import styled from 'styled-components';
import { skillsData } from '../data/techSkills.js';
import SectionHeader from './sharedStyles/sectionHeader.js';
import HeaderLine from './sharedStyles/headerLine.js';
import Title from './sharedStyles/sectionTitle.js';
import SectionDiv from './sharedStyles/sectionDiv.js';

const TechStack = () => {
  const skills = skillsData.map((skill, i) => (
    <Skill key={i} className="skill">
      <Icon className={`${skill.icon} devicon`} />
      <Label className="skill-label">{skill.name}</Label>
    </Skill>
  ));

  return (
    <SectionDiv style={{ background: '#65BAD6' }}>
      <SectionHeader>
        <Title style={{ color: 'white' }}>Technical Skills</Title>
        <HeaderLine style={{ borderBottom: '2px solid #FEC200' }} />
      </SectionHeader>
      <SkillsContainer className="skills-container">{skills}</SkillsContainer>
    </SectionDiv>
  );
};

export default TechStack;

const SkillsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  padding: 1rem 3rem;
`;

const Skill = styled.div`
  min-width: 120px;
  width: 15%;
  padding: 0.5rem;
  margin: 1rem 0.5rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: white;
  letter-spacing: 0.5px;
  transition: all 0.5s ease;
`;

const Icon = styled.i`
  font-size: 3rem;
`;

const Label = styled.div`
  margin-top: 0.5rem;
`;
