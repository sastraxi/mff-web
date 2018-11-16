import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetectMobile from './util/DetectMobile';

import Services from './Services';

import Header from '../elements/Header';
import Paragraph from '../elements/Paragraph';

const Wrapper = styled.div`
`;

const Lyrics = styled.div`
  font-style: italic;
  margin: 1em;
  text-align: center;
  opacity: 0.5;
`;

const Description = styled(Paragraph)`
  margin: 1em 0 0 0;
`;

const Title = styled(Header)`
  text-align: center;
`;

const ContactUs = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <Lyrics>
      &mdash; nothing’s the same for anyone
      anymore... we’re
    </Lyrics>
    <Title>Contact us</Title>
    <Description>
      We love hearing from our fans, friends, and family.
    </Description>
    <Services
      type="list"
      withIcons
      instagram="https://insta"
      facebook="https://def"
      spotify="https://spotify/mff-artist"
      bandcamp="https://abc"
      itunes="https://apple/mff-artist"
    />
  </Wrapper>
);

ContactUs.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default DetectMobile(ContactUs);
