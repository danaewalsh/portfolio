/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
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
          <Title style={{ color: 'white' }}>Contact Me</Title>
          <HeaderLine style={{ borderBottom: '2px solid white' }} />
        </SectionHeader>
        <Container>
          <InnerDiv> Thank you for visiting my portfolio! Please reach out via LinkedIn or send me a message via the form below. Looking forward to speaking with you!</InnerDiv>
          <Form>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input multiline rows="3" label="What do you want to talk about? I'm partial to chatting about 🐕, 🌱, and 🏔️" />
            <Button type="button">Send message</Button>
          </Form>
        </Container>
      </SectionDiv>
    );
  }
}

export default ContactMe;

const InnerDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin: auto;
  text-align: center;
  padding: 0px 70px;
`;

const Container = styled.div`
  margin: 0px 10%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px;
  width: 70%;
`;

const Textarea = styled.textarea`
  margin: 10px;
  width: 70%;
`;

const Button = styled.button`
  width: 10%;

`;
