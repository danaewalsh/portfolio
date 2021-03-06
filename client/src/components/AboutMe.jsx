/* eslint-disable import/extensions */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
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
      <FlexComponent style={{ flexDirection: 'column', marginRight: '15px' }}>
        <InnerDiv style={{ paddingTop: '40px' }}>
          Hello world!
        </InnerDiv>
        <InnerDiv>
          I’m a full-stack software engineer passionate about building clean, intuitive, helpful applications that make a difference in the lives of others. I’ve held customer-facing roles in industries ranging from tourism to tech sales to healthcare which instilled in me a relentless focus on delighting the customer and allows me to bring a well rounded perspective to any conversation. I thrive in collaborative environments, and pride myself on being the ultimate team player.
        </InnerDiv>
        <InnerDiv>
          When I'm not coding you'll find me in my garden or out on a hike, and I'm always accompanied by my two rescue dogs. Reach out if you need someone to build beautiful applications the right way or if you just want to chat!
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
  height: 300px;
  margin: auto;
  border-radius: 15px;
`;
