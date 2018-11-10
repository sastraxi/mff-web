import React from 'react';
import styled from 'styled-components';

import bgSrc from '../images/bg.jpg';
import logoBgSrc from '../images/logo-bg.svg';
import Logo from './image/Logo';
import { TITLE_SKEW } from '../elements/global';

/* TODO: splash should rotate through a couple stage images and the logo */

const Wrapper = styled.div`
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

  position: relative;
`;

const LogoWrapper = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  top: 30px;
`;

const LogoBackground = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
`;

export default () => (
  <Wrapper>
    <LogoWrapper>
      <LogoBackground src={logoBgSrc} alt="" />
      <Logo />
    </LogoWrapper>
  </Wrapper>
);
