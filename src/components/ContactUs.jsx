import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetectMobile from './util/DetectMobile';

import Header from '../elements/Header';
import Paragraph from '../elements/Paragraph';
import ContactForm from '../elements/ContactForm';

const Wrapper = styled.div`
`;

const Description = styled(Paragraph)`
  margin: 1em 0;
`;

const Title = styled(Header)`
  text-align: center;
`;

const ContactUs = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <Title>Contact us</Title>
    <Description>
      Get in touch with the boys. Request a press kit,
      ask when we’ll be in your area, or shoot the
      shit about hockey
    </Description>
    <ContactForm />
  </Wrapper>
);

ContactUs.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default DetectMobile(ContactUs);
