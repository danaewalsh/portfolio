import React from 'react';
import styled from 'styled-components';
import SectionDiv from './sharedStyles/sectionDiv.js';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      // <SectionDiv style={{ height: '700px', width: '100%', background: 'none', position: 'relative' }}>
      //   <ImageWrapper>
      //     <BackgroundPhoto src="poppies.jpg" alt="poppies" />
      //   </ImageWrapper>
      //   <IntroText>
      //     <Text>Dana Walsh</Text>
      //     <Text> Software Engineer </Text>
      //   </IntroText>
      // </SectionDiv>
      <BackgroundPhoto>
        <Line style={{ fontSize: '45px' }}>Dana Walsh</Line>
        <Line>Software Engineer</Line>
        <Line> Bay Area, California</Line>
      </BackgroundPhoto>
    );
  }
}

export default Intro;

const BackgroundPhoto = styled.div`
  width: 100%;
  height: 700px;
  overflow: hidden;
  background: center / cover no-repeat url(https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80);
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Line = styled.div`
  font-size: 35px;
`;

// const BackgroundPhoto = styled.img`
//   object-fit: cover;
//   width: 100%;
//   height: 700px;
// `;

// const ImageWrapper = styled.div`
//   height: 100%;
//   width: 100%;
// `;

// const IntroText = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   display: flex;
//   flex-direction: column;
// `;

// const Text = styled.div`
//   text-align: center;
//   font-size: 45px;
// `;
