import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DetectMobile from './util/DetectMobile';

import Header from '../elements/Header';
import Paragraph from '../elements/Paragraph';

const Wrapper = styled.div`
`;

const Welcome = ({ isMobile }) => (
  <Wrapper isMobile={isMobile}>
    <Header>This is My Favourite Filter’s website.</Header>
    <Paragraph>
      Fusce porta purus faucibus sapien bibendum, eget efficitur arcu consequat
      Aenean rutrum commodo tristique.
      Phasellus suscipit laoreet ex ac aliquet.
      Ut lobortis vehicula mauris, sollicitudin luctus turpis varius quis.
      Mauris volutpat mi vel arcu dignissim rutrum in sed purus.
      Aenean iaculis ultricies velit sit amet cursus.
      Sed eu diam volutpat, egestas nunc sit amet, tempor elit.
      Sed tincidunt ligula nisi, sit amet venenatis dolor pulvinar in.
    </Paragraph>
  </Wrapper>
);

Welcome.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default DetectMobile(Welcome);
