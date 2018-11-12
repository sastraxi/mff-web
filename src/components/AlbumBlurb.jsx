import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AlbumCover from './image/AlbumCover';
import DetectMobile from './util/DetectMobile';

import MusicServices from './MusicServices';

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

const AlbumBlurb = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <AlbumCover />
    <Lyrics>
      &mdash; nothing’s the same for anyone
      anymore... we’re
    </Lyrics>
    <Title>Always Changing</Title>
    <Description>
      The debut ep by My Favourite Filter
      is available now. Five songs to celebrate
      the bonds of brotherhood, family, and
      those you love.
    </Description>
    <MusicServices
      type="text"
      spotify="https://spotify"
      apple="https://apple"
      itunes="https://itunes"
    />
  </Wrapper>
);

AlbumBlurb.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default DetectMobile(AlbumBlurb);
