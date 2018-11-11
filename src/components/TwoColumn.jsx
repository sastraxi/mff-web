import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1040px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 2em;

  & > div {
    margin: ${props => props.columnMargin};
  }

  & > :first-child {
    max-width: ${props => props.split};
    min-width: ${props => props.minSplit || 'auto'};
  }

  & > :last-child {
  }

  @media (max-width: ${props => props.mobileWidth}) {
    flex-direction: column-reverse;
    & > :first-child {
      max-width: unset;
      min-width: unset;
    }
  }
`;

const TwoColumn = ({
  a, b,
  ...wrapperProps
}) => (
  <Wrapper {...wrapperProps}>
    { a }
    { b }
  </Wrapper>
);

TwoColumn.propTypes = {
  split: PropTypes.string.isRequired,
  minSplit: PropTypes.string,
  columnMargin: PropTypes.string,
  a: PropTypes.node.isRequired,
  b: PropTypes.node.isRequired,
  mobileWidth: PropTypes.string,
};

TwoColumn.defaultProps = {
  columnMargin: '3em',
  minSplit: undefined,
  mobileWidth: '480px',
};

export default TwoColumn;
