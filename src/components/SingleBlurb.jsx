import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetectMobile from './util/DetectMobile';
import Bandcamp from '../elements/Bandcamp';

import Header from '../elements/Header';
import Paragraph from '../elements/Paragraph';
import Services from './Services';

const Wrapper = styled.div`
`;

const Lyrics = styled.div`
  font-style: italic;
  margin: 1em 0;
  text-align: center;
  opacity: 0.5;
`;

const Description = styled(Paragraph)`
  margin: 1em 0 0 0;
`;

const Title = styled(Header)`
  text-align: center;
`;

const SingleBlurb = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <Bandcamp
      type="album"
      id={4254662711}
      tracks={[1710010641]}
      esig="d4e10ad440b106ebce64f72cc64684a7"
      name="Am I To Blame?"
      url="https://myfavouritefilter.bandcamp.com/album/always-changing"
    />
    <Lyrics>
      “I just can’t explain these thoughts,
      <br />
      they’re mine to own”
    </Lyrics>
    <Title>Am I To Blame?</Title>
    <Description>
      we’re super excited to show you
      the first single off of our debut ep!
      share your thoughts below &mdash; mff
    </Description>
    <Services
      type="list"
      bandcamp="https://myfavouritefilter.bandcamp.com/album/always-changing"
    />
  </Wrapper>
);

SingleBlurb.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default DetectMobile(SingleBlurb);
