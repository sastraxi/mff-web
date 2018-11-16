import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Root from '../components/Root';

import Splash from '../components/Splash';
import Banner from '../components/Banner';
import SingleBlurb from '../components/SingleBlurb';
import UpcomingShows from '../components/UpcomingShows';
import ContactUs from '../components/ContactUs';
import Welcome from '../components/Welcome';
import Instagrid from '../components/Instagrid';
import TwoColumn from '../components/TwoColumn';

import Divider from '../elements/Divider';
import DetectMobile from '../components/util/DetectMobile';

const MobileDivider = DetectMobile(({ isMobile }) => (
  isMobile ? <Divider /> : null
));

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
    <SingleBlurb />
    <Divider />
    <ContactUs />
  </SpacedOut>
);

const RightColumn = () => (
  <SpacedOut paddingTop="3em" spacing="2em">
    <Welcome />
    <UpcomingShows />
    <Instagrid />
    <MobileDivider />
  </SpacedOut>
);

const IndexPage = () => (
  <Root>
    <Helmet>
      <title>my favourite filter</title>
    </Helmet>
    <Splash />
    <Banner />
    <TwoColumn split="25%" minSplit="150px" a={<LeftColumn />} b={<RightColumn />} />
  </Root>
);

export default IndexPage;
