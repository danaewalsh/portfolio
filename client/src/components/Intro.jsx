import React from 'react';
import styled from 'styled-components';

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <BackgroundPhoto>
        <Group>
          <Line style={{ fontSize: '45px' }}>Dana Walsh</Line>
          <Line>Software Engineer</Line>
          <Line> Bay Area, California</Line>
        </Group>

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
  font-size: 25px;
  text-shadow: 1px 1px white;
`;

const Group = styled.div`
  padding: 275px 0px;
`;
