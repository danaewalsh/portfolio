/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import SectionDiv from './sharedStyles/sectionDiv.js';
import SectionHeader from './sharedStyles/sectionHeader.js';
import HeaderLine from './sharedStyles/headerLine.js';
import Title from './sharedStyles/sectionTitle.js';

class ContactMe extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <SectionDiv style={{ background: '#65BAD6' }}>
        <SectionHeader>
          <Title style={{ color: 'white' }}>Contact</Title>
          <HeaderLine style={{ borderBottom: '2px solid white' }} />
        </SectionHeader>
        <Container>
          <InnerDiv>
            Thank you for visiting my portfolio! Please feel free to connect with me via LinkedIn, or reach out with any questions. Looking forward to speaking with you!
          </InnerDiv>
          <InnerDiv>
            <Link href="https://github.com/danaewalsh" target="blank">
              <Icon className="devicon-github-original" />
            </Link>
            <Link href="https://www.linkedin.com/in/dana-walsh/" target="blank">
              <Icon className="devicon-linkedin-plain" />
            </Link>
          </InnerDiv>
          <Form>
            <TextField
              style={{ width: '50%', margin: '10px', background: 'white' }}
              id="outlined-basic"
              label="Name"
              variant="filled"
            />
            <TextField
              style={{ width: '50%', margin: '10px', background: 'white' }}
              id="outlined-basic"
              label="Email"
              variant="filled"
            />
            <TextField
              style={{ width: '50%', margin: '10px', background: 'white' }}
              id="outlined-basic"
              label="Let's chat! I love talking about 🐕, 🌻, and 🏔️"
              multiline
              rows="4"
              variant="filled"
            />
            <Button type="button">Send message</Button>
          </Form>
        </Container>
      </SectionDiv>
    );
  }
}

export default ContactMe;

const Icon = styled.i`
  font-size: 3rem;
  color: white;
  &:hover {
    color: #FEC200;
  }
`;

const Link = styled.a`
  margin: 10px;
  &:hover {
    text-decoration: none;
  }
`;

const InnerDiv = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin: auto;
  text-align: center;
  padding: 0px 70px;
  color: white;
`;

const Container = styled.div`
  margin: 0px 10%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 15%;
  background: #FEC200;
  border: none;
  border-radius: 10px;
  margin: 20px;
  padding: 8px;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 2px 2px white;
  }
`;
