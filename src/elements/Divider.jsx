import React from 'react';
import styled from 'styled-components';

const Divider = styled.div`
  display: block;
  text-align: center;
  opacity: 0.3;
  padding: 1em 2.5em;
  letter-spacing: .2em;
`;

export default () => (
  <Divider>
    ♦ ♦ ♦
  </Divider>
);
