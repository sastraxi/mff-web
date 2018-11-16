import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetectMobile from './util/DetectMobile';
import Services from './Services';

import { HEADER_FONT_FAMILY, TITLE_SKEW } from '../elements/global';

const Wrapper = styled.div`
  transform: skew(0, ${TITLE_SKEW});
  position: relative;
  
  background: black;
  color: #bbb;
  padding: 0.6em 1em;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
  @media (max-width: 480px) {
    flex-direction: column;
    padding: 2em 1em;
    align-items: center;
    height: 18vh;
  }
`;

const YellowIcon = styled.span`
  color: #fff000;
  transform: scale(1.5,1) rotate(${TITLE_SKEW});
  display: inline-block;
`;

const Album = styled.div`
  margin-top: 3px;
  @media (max-width: 480px) {
    margin-top: unset;
  }

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

const Announcement = styled.div`
  margin-top: 3px;
  @media (max-width: 480px) {
    margin-top: unset;
    padding: 0 1em;
    text-align: center;
  }
`;

const AlbumBanner = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <Album>
      <YellowIcon>&#9654;</YellowIcon>
      <em>Am I To Blame?</em>
    </Album>
    <Announcement>
      listen to the lead single now
    </Announcement>
    <Services
      type="icons"
      spotify="https://spotify"
      apple="https://apple"
      itunes="https://itunes"
      bandcamp="https://myfavouritefilter.bandcamp.com/albums/always-changing"
    />
  </Wrapper>
);

AlbumBanner.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default DetectMobile(AlbumBanner);
