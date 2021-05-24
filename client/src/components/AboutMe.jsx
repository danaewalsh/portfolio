import React from 'react';
import styled from 'styled-components';
import SectionDiv from './sharedStyles/sectionDiv.js';
import Container from './sharedStyles/flexBoxContainer.js';
import FlexComponent from './sharedStyles/flexBoxComponent.js';

const AboutMe = () => (
  <SectionDiv id="about">
    <Container>
      <FlexComponent>
        <Image src="swissPhoto.png" alt="Photo in the Swiss Alps" />
      </FlexComponent>
      <FlexComponent style={{ flexDirection: 'column' }}>
        <InnerDiv>
          Hello world!
        </InnerDiv>
        <InnerDiv style={{ padding: '5px 50px' }}>
          My name is Dana Walsh, and I am a Full Stack Software Engineer. I am passionate about technology that makes a difference and tangibly improves the world. I am currently working on passion projects while on the look out for new employment opportunities. I have a diverse background ranging from tourism to tech sales to healthcare. I bring a unique and well rounded perspective to any team, and pride myself on being the ultimate team player.
        </InnerDiv>
        <InnerDiv style={{ padding: '20px 50px' }}>
          When I'm not coding you'll find me in my garden or out on a hike, and I'm always accompanied by my two rescue dogs. Please feel free to reach out with any questions or if you just want to chat!
        </InnerDiv>
      </FlexComponent>
    </Container>
    <Container>
      <FlexComponent>
        Front-End
      </FlexComponent>
      <FlexComponent>
        BackEnd
      </FlexComponent>
      <FlexComponent>
        Frameworks / Libraries
      </FlexComponent>
    </Container>
  </SectionDiv>
);

export default AboutMe;

const InnerDiv = styled.div`
  padding: 20px;
`;

const Image = styled.img`
  height: 300px;
  border-radius: 5px;
  padding-top: 50px;
`;
