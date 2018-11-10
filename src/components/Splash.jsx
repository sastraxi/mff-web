import React from 'react';
import styled from 'styled-components';

import bg from '../images/bg.jpg';
import Logo from './image/Logo';

const Wrapper = styled.div`
  background: url(${props => props.bg});

  @media (max-width: 600px) {

  }

`;

export default () => (
  <Wrapper bg={bg}>
    <Logo />
  </Wrapper>
);

