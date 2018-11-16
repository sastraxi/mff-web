import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ServiceIcon from '../elements/ServiceIcon';

const SERVICE_ACTIONS = {
  spotify: 'Stream on Spotify',
  apple: 'Stream on Apple Music',
  tidal: 'Get it on Tidal',
  itunes: 'Get it on iTunes',
  youtube: 'View on YouTube',
};

const Icons = styled.div`
  padding-right: 0.5em;
  & > * {
    margin-left: 0.5em;
    img {
      width: 24px;
      height: 100%;
      padding: 0 0.25em;
    }
  }
`;

const List = styled.ul`
  margin: 1em;
  padding-left: 0;

  & > li {
  }
`;

const Services = ({ type, ...services }) => {
  switch (type) {
    case 'list':
      return (
        <List>
          {
            Object.keys(services).map(name => (
              <li key={name}>
                <a href={services[name]}>
                  { SERVICE_ACTIONS[name] }
                </a>
              </li>
            ))
          }
        </List>
      );

    case 'icons':
      return (
        <Icons>
          {
            Object.keys(services).map(name => (
              <a key={name} href={services[name]}>
                <ServiceIcon name={name} />
              </a>
            ))
          }
        </Icons>
      );

    default:
      console.error(`Bad type given: ${type}`);
      return null;
  }
};

Services.propTypes = {
  type: PropTypes.oneOf(['list', 'icons']).isRequired,
  apple: PropTypes.string,
  tidal: PropTypes.string,
  spotify: PropTypes.string,
  itunes: PropTypes.string,
  youtube: PropTypes.string,
};

export default Services;
