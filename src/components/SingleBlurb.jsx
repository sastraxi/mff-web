import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetectMobile from './util/DetectMobile';
import AlbumCover from './image/AlbumCover';

import Header from '../elements/Header';
import Paragraph from '../elements/Paragraph';
import MusicServices from './MusicServices';

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

const SingleBlurb = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <AlbumCover />
    <Lyrics>
      There’s nothing quite as healing
      <br />
      as friends you love
      <br />
      or a call from your mom
    </Lyrics>
    <Title>End of your Gun</Title>
    <Description>
      We’re super excited to share the
      lead single from our upcoming EP
      with you!
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
