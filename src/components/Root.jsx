import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: white;
`;

const Root = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
