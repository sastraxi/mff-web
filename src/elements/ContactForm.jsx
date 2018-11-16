import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 1em;
  padding: 0.2em 0.4em;
  width: 100%;
  display: block;
  box-sizing: border-box;

  margin-bottom: 0.5em;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  font-size: 1em;
  padding: 0.2em 0.4em;
  width: 100%;
  display: block;
  box-sizing: border-box;
  resize: vertical;

  margin-bottom: 0.5em;
  border: 1px solid #ccc;
`;

const Submit = styled.button`
  font-size: 1em;
  padding: 0.2em 0.4em;
  width: 100%;
  display: block;
  box-sizing: border-box;
  cursor: pointer;
`;

// without this <p> inserted in the form, the email field disappears
// when deployed to netlify. weird shit => weird <p>.
const WeirdP = styled.p`
  margin: 0;
`;

const ContactForm = () => (
  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <Input type="text" name="name" placeholder="Your name" />
    <WeirdP>
      <Input type="email" name="email" placeholder="Your email" />
    </WeirdP>
    <TextArea id="contact-message" name="message" placeholder="What's on your mind?" />
    <Submit type="submit">Send</Submit>
  </form>
);

export default ContactForm;
