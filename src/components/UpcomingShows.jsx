import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetectMobile from './util/DetectMobile';

import Header from '../elements/Header';
import Paragraph from '../elements/Paragraph';

const Wrapper = styled.div`
`;

const UpcomingShows = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <Header>Upcoming Shows</Header>
    <Paragraph>
      ALWAYS CHANGING EP Release Party
      <br />
      Saturday, December 8th @ The Hideout
      <br />
      Doors 7pm; for more details see the&nbsp;
      <a href="https://www.facebook.com/events/196747297874285/">event page on facebook</a>
      .
    </Paragraph>
  </Wrapper>
);

UpcomingShows.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default DetectMobile(UpcomingShows);
