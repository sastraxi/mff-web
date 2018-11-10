import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetectMobile from './util/DetectMobile';

import Header from '../elements/Header';
import Paragraph from '../elements/Paragraph';

const Wrapper = styled.div`
`;

const OurStory = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <Header>Our Story</Header>
    <Paragraph>
      Matt and Rob started writing music together in Matt's kitchen, in the summer of 2017.
      Together, they recruited Sasha, Cam, and Reiner. Coming from diverse musical backgrounds
      but sharing a love for pop rock
    </Paragraph>
  </Wrapper>
);

OurStory.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default DetectMobile(OurStory);
