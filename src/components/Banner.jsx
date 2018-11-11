import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetectMobile from './util/DetectMobile';
import MusicService from './MusicService';
import { HEADER_FONT_FAMILY, TITLE_SKEW } from '../elements/global';

const Wrapper = styled.div`
  transform: skew(0, ${TITLE_SKEW});
  position: relative;
  
  background: black;
  color: #bbb;
  padding: 0.5em 1em;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 2em 1em;
  }
`;

const YellowIcon = styled.span`
  color: #fff000;
  transform: scale(1.5,1) rotate(${TITLE_SKEW});
  display: inline-block;
`;

const Announcement = styled.span`
  padding: 0.5em;
  em {
    font-family: ${HEADER_FONT_FAMILY};
    text-transform: lowercase;
    font-size: 150%;
    line-height: 80%;
    font-style: normal;
    color: white;
    padding-left: 0.5em;
    padding-right: 0.2em;
  }
`;

const Services = styled.div`
  padding-right: 0.5em;
  & > * {
    margin-left: 0.5em;
    img {
      width: 32px;
      height: 100%;
    }
  }
`;

const AlbumBanner = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <Announcement>
      <YellowIcon>&#9654;</YellowIcon>
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
