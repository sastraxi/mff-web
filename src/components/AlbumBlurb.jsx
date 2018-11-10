import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import AlbumCover from './image/AlbumCover';
import DetectMobile from './util/DetectMobile';

import Header from '../elements/Header';

const Wrapper = styled.div`
`;

const Lyrics = styled.div`
  font-style: italic;
  margin: 1em;
  text-align: center;
`;

const Description = styled.div`
  margin: 1em;
  text-align: justify;
`;

const Title = styled(Header)`
  text-align: center;
`;

const WhereToListen = styled.ul`
  margin: 1em;
`;

const AlbumBlurb = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <AlbumCover />
    <Lyrics>
      Nothing’s the same for anyone
      anymore... we’re
    </Lyrics>
    <Title>Always Changing</Title>
    <Description>
      The debut ep by My Favourite Filter
      is available now. Five songs to celebrate
      the bonds of brotherhood, family, and
      those you love.
    </Description>
    <WhereToListen>
      <li>Our Bandcamp</li>
      <li>Spotify</li>
      <li>Apple Music</li>
      <li>iTunes</li>
    </WhereToListen>
  </Wrapper>
);

AlbumBlurb.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default DetectMobile(AlbumBlurb);
