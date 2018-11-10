import styled from 'styled-components';
import { HEADER_FONT_FAMILY } from './global';

const Header = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: lighter;
  font-family: ${HEADER_FONT_FAMILY};
  font-size: 48px;
  line-height: 36px;
  text-transform: lowercase;
  color: #444;
  padding-bottom: 0.5em;

  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 22px;
  }

`;

export default Header;
