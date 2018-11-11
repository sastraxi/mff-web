import React from 'react';
import styled from 'styled-components';

import bgSrc from '../images/bg.jpg';
import logoBgSrc from '../images/logo-bg.svg';
import Logo from './image/Logo';
import { TITLE_SKEW } from '../elements/global';

/* TODO: splash should rotate through a couple stage images and the logo */

const Wrapper = styled.div`
  position: relative;

  background: url(${bgSrc});
  background-size: cover;
  background-position: 50% 10%;

  transform: skew(0, ${TITLE_SKEW});
  margin-top: -30px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 50vh;
  min-height: 500px;
  width: 100%;

  @media (max-width: 960px) {
    height: 30vh;
    min-height: 300px;
  }

  @media (max-width: 480px) {
    height: 65vh;
  }
`;

const LogoWrapper = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  top: 30px;
  @media (max-width: 960px) {
    width: 200px;
    height: 150px;
  }
`;

const LogoBackground = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);

  @media (max-width: 960px) {
    width: 200px;
    height: 200px;
  }
`;

export default () => (
  <Wrapper>
    <LogoWrapper>
      <LogoBackground src={logoBgSrc} alt="" />
      <Logo />
    </LogoWrapper>
  </Wrapper>
);
