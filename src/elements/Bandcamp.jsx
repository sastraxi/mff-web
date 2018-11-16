import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactResizeDetector from 'react-resize-detector';

// reverse-engineered bandcamp "large" widget height based on width
const calcHeight = (width) => {
  if (width >= 300) return width + 92;
  return width + 114;
};

const Embed = styled.iframe`
  border: 0;
  width: ${props => props.width}px;
  height: ${props => calcHeight(props.width)}px;
`;

const Widget = ({ track, name, width }) => (
  <Embed
    width={width}
    src={`https://bandcamp.com/EmbeddedPlayer/track=${track}/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true/?w=${width}`}
    seamless
  >
    <a href="http://myfavouritefilter.bandcamp.com/track/end-of-your-gun">
      {name}
      by My Favourite Filter
    </a>
  </Embed>
);

Widget.propTypes = {
  track: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

const Bandcamp = ({ width, ...props }) => {
  // 1. explicit width
  if (width) return <Widget {...props} />;

  // 2. auto-sizing embed widget
  return (
    <ReactResizeDetector handleWidth>
      {(sizeProps) => {
        console.log(sizeProps);
        if (!sizeProps) return <div />;
        return <Widget {...props} width={sizeProps} />;
      }}
    </ReactResizeDetector>
  );
};

Bandcamp.propTypes = {
  width: PropTypes.number,
};

Bandcamp.defaultProps = {
  width: undefined,
};

export default Bandcamp;
