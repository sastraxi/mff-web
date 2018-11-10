import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 2em;

  & > div {
    margin: ${props => props.columnMargin};
  }

  & > :first-child {
    max-width: ${props => props.split};
  }

  & > :last-child {
  }
`;

const TwoColumn = ({
  split, columnMargin, a, b,
}) => (
  <Wrapper split={split} columnMargin={columnMargin}>
    { a }
    { b }
  </Wrapper>
);

TwoColumn.propTypes = {
  split: PropTypes.string.isRequired,
  columnMargin: PropTypes.string,
  a: PropTypes.node.isRequired,
  b: PropTypes.node.isRequired,
};

TwoColumn.defaultProps = {
  columnMargin: '3em',
};

export default TwoColumn;
