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
      Aliquam fringilla neque mauris.
      <br />
      Proin ac ipsum pharetra, porta diam ac, mattis libero.
      <br />
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    </Paragraph>
  </Wrapper>
);

UpcomingShows.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default DetectMobile(UpcomingShows);
