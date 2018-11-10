import React from 'react';
import styled from 'styled-components';

import Root from '../components/Root';

import Splash from '../components/Splash';
import AlbumBanner from '../components/AlbumBanner';
import AlbumBlurb from '../components/AlbumBlurb';
import UpcomingShows from '../components/UpcomingShows';
import OurStory from '../components/OurStory';
import Instagrid from '../components/Instagrid';
import TwoColumn from '../components/TwoColumn';

/* TODO: mobile version */

const SpacedOut = styled.div`
  width: ${props => props.width || 'auto'};
  padding-top: ${props => props.paddingTop};
  & > * + * {
    padding-top: 1em;
  }
`;

const LeftColumn = () => (
  <SpacedOut paddingTop="1em">
    <AlbumBlurb />
    {/* TODO: contact information */}
  </SpacedOut>
);

const RightColumn = () => (
  <SpacedOut paddingTop="3em">
    <UpcomingShows />
    <Instagrid />
    <OurStory />
  </SpacedOut>
);

const IndexPage = () => (
  <Root>
    <Splash />
    <AlbumBanner />
    <TwoColumn split="20%" a={<LeftColumn />} b={<RightColumn />} />
  </Root>
);

export default IndexPage;
