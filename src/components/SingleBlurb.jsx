import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetectMobile from './util/DetectMobile';

import Header from '../elements/Header';
import Paragraph from '../elements/Paragraph';
import MusicServices from './MusicServices';

const Wrapper = styled.div`
`;

const Description = styled(Paragraph)`
  margin: 1em 0 0 0;
`;

const Title = styled(Header)`
  text-align: center;
`;

const SingleBlurb = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <Title>End of your Gun</Title>
    <Description>
      Lorem ipsum dolor sit amet.
    </Description>
    <MusicServices
      type="text"
      spotify="https://open.spotify.com/listen/bx9vn2"
      youtube="https://youtube.com/watch?v="
      apple="https://apple.com/music"
      itunes="https://itunes"
    />
  </Wrapper>
);

SingleBlurb.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default DetectMobile(SingleBlurb);
