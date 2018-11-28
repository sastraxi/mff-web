import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetectMobile from './util/DetectMobile';

import Header from '../elements/Header';
import Paragraph from '../elements/Paragraph';

import Services from './Services';

const Wrapper = styled.div`
`;

const Welcome = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <Header>This is My Favourite Filter’s website.</Header>
    <Paragraph>
      From the depths of the downtown Toronto music scene,
      My Favourite Filter is an up and coming 5 piece rock
      act. They operate on a simple code: Love each other,
      love yourself.
    </Paragraph>
    <Paragraph>
      With a hard focus on writing songs that cater to its
      fun-loving listeners, My Favourite Filter boasts a full
      sound featuring 3 part vocal harmonies, blistering lead
      guitar licks, and a rhythm section that will make you
      want to move your body.
    </Paragraph>
    <Paragraph>
      Above all, this is a band of brothers who love the
      music they play and couldn’t be more excited to
      share it with the world. Follow us on social media
      for updates on recorded content and upcoming events.
    </Paragraph>
    <Services
      type="list"
      withIcons
      instagram="https://instagram.com/my_favourite_filter"
      facebook="https://facebook.com/myfavouritefilter"
      bandcamp="https://myfavouritefilter.bandcamp.com"
    />
  </Wrapper>
);

Welcome.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default DetectMobile(Welcome);
