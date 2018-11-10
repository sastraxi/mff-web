import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetectMobile from './util/DetectMobile';
import MusicService from './MusicService';

const Wrapper = styled.div`
  transform: skew(0, 2deg);
  position: relative;
  
  background: black;
  color: #bbb;
  padding: 0.5em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Announcement = styled.span`
  padding: 0.5em;
  em {
    font-weight: bold;
    font-style: normal;
    color: white;
  }
`;

const Services = styled.div`
  padding-right: 0.5em;
  & > * {
    margin-left: 0.5em;
    img {
      width: 32px;
      height: 32px;
    }
  }
`;

const AlbumBanner = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <Announcement>
      <em>ALWAYS CHANGING</em>
      &nbsp;&ndash; our debut ep available now
    </Announcement>
    <Services>
      <a href="https://itunes.com"><MusicService name="itunes" /></a>
      <a href="https://itunes.com"><MusicService name="spotify" /></a>
      <a href="https://itunes.com"><MusicService name="apple-music" /></a>
    </Services>
  </Wrapper>
);

AlbumBanner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default DetectMobile(AlbumBanner);
