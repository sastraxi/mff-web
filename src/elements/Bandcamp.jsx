import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactResizeDetector from 'react-resize-detector';

// 120 and 142 for "exclusives", same breakpoint
// src="https://bandcamp.com/EmbeddedPlayer/album=4254662711/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/tracklist=false/tracks=1710010641/esig=d4e10ad440b106ebce64f72cc64684a7/" seamless><a href="http://myfavouritefilter.bandcamp.com/album/always-changing">

// reverse-engineered bandcamp "large" widget height based on width
const calcHeight = (width, isExclusive) => {
  if (width >= 300) return width + (isExclusive ? 120 : 92);
  return width + (isExclusive ? 142 : 114);
};

const Embed = styled.iframe`
  border: 0;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const URI_BASE = 'https://bandcamp.com/EmbeddedPlayer';
const FIXED_SETTINGS = '/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/transparent=true';

const Widget = ({
  type, id, tracks,
  url, name, width, esig,
}) => {
  let src = `${URI_BASE}/${type}=${id}${FIXED_SETTINGS}`;
  if (tracks) {
    src += `/tracks=${tracks.join(',')}`;
  }
  if (esig) {
    src += `/esig=${esig}`;
  }
  src += `?w=${width}`;
  return (
    <Embed
      width={width}
      height={calcHeight(width, !!esig)}
      src={src}
      seamless
    >
      <a href={url}>
        {name}
        by My Favourite Filter
      </a>
    </Embed>
  );
};

Widget.propTypes = {
  type: PropTypes.oneOf(['track', 'album']),
  id: PropTypes.number.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.number),
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  esig: PropTypes.string, // exclusive signature
};

Widget.defaultProps = {
  type: 'track',
  tracks: undefined,
  esig: false,
};

const Bandcamp = ({ width, ...props }) => {
  // 1. explicit width
  if (width) return <Widget {...props} />;

  // 2. auto-sizing embed widget
  return (
    <>
      <a id="bandcamp" /> {/* eslint-disable-line */}
      <ReactResizeDetector handleWidth>
        {(sizeProps) => {
          console.log(sizeProps);
          if (!sizeProps) return <div />;
          return <Widget {...props} width={sizeProps} />;
        }}
      </ReactResizeDetector>
    </>
  );
};

Bandcamp.propTypes = {
  width: PropTypes.number,
};

Bandcamp.defaultProps = {
  width: undefined,
};

export default Bandcamp;
