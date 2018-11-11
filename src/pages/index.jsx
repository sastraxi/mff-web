import React from 'react';
import styled from 'styled-components';

import Root from '../components/Root';

import Splash from '../components/Splash';
import Banner from '../components/Banner';
import AlbumBlurb from '../components/AlbumBlurb';
import UpcomingShows from '../components/UpcomingShows';
import Welcome from '../components/Welcome';
import Instagrid from '../components/Instagrid';
import TwoColumn from '../components/TwoColumn';

/* TODO: mobile version */

const SpacedOut = styled.div`
  width: ${props => props.width || 'auto'};
  padding-top: ${props => props.paddingTop};
  & > * + * {
    padding-top: ${props => props.spacing || '1em'};
  }

  @media (max-width: 480px) {
    padding-top: unset;
  }
`;

const LeftColumn = () => (
  <SpacedOut paddingTop="1em">
    <AlbumBlurb />
    {/* TODO: contact information */}
  </SpacedOut>
);

const RightColumn = () => (
  <SpacedOut paddingTop="3em" spacing="2em">
    <Welcome />
    <UpcomingShows />
    <Instagrid />
  </SpacedOut>
);

const IndexPage = () => (
  <Root>
    <Splash />
    <Banner />
    <TwoColumn split="20%" a={<LeftColumn />} b={<RightColumn />} />
  </Root>
);

export default IndexPage;
