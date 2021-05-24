import React from 'react';
import styled from 'styled-components';
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import SectionDiv from './sharedStyles/sectionDiv.js';
import Container from './sharedStyles/flexBoxContainer.js';
import FlexComponent from './sharedStyles/flexBoxComponent.js';
import SectionHeader from './sharedStyles/sectionHeader.js';
import HeaderLine from './sharedStyles/headerLine.js';
import Title from './sharedStyles/sectionTitle.js';

const AboutMe = () => (
  <SectionDiv id="about">
    <SectionHeader>
      <Title>About Me</Title>
      <HeaderLine />
    </SectionHeader>
    <Container>
      <FlexComponent style={{ flexDirection: 'column' }}>
        <InnerDiv style={{ paddingTop: '40px' }}>
          Hello world!
        </InnerDiv>
        <InnerDiv style={{ padding: '5px 50px' }}>
          My name is Dana Walsh, and I am a Full Stack Software Engineer. I am passionate about technology that makes a difference and tangibly improves the world. I am currently working on passion projects while on the look out for new employment opportunities. I have a diverse background ranging from tourism to tech sales to healthcare. I bring a unique and well rounded perspective to any team, and pride myself on being the ultimate team player.
        </InnerDiv>
        <InnerDiv style={{ padding: '20px 50px' }}>
          When I'm not coding you'll find me in my garden or out on a hike, and I'm always accompanied by my two rescue dogs. Please feel free to reach out with any questions or if you just want to chat!
        </InnerDiv>
        <InnerDiv>
          <a
            href="https://drive.google.com/file/d/1ec0Utfgl33d4dvTX8m5xYzxEiwtH2Xv5/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <p className="cta-line">
              <span> Download Resume</span>
              <PictureAsPdfIcon className="pdf-icon" />
            </p>
          </a>
        </InnerDiv>
      </FlexComponent>
      <FlexComponent>
        <Image src="swissPhoto.png" alt="Photo in the Swiss Alps" />
      </FlexComponent>
    </Container>
  </SectionDiv>
);

export default AboutMe;

const InnerDiv = styled.div`
  padding: 10px;
`;

const Image = styled.img`
  height: 350px;
  margin: auto;
  border-radius: 15px;
  margin-top: 40px;
`;
