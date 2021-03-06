import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ServiceIcon from '../elements/ServiceIcon';

const SERVICE_ACTIONS = {
  spotify: 'Stream on Spotify',
  apple: 'Stream on Apple Music',
  itunes: 'Get it on iTunes',
  youtube: 'Watch on YouTube',
  bandcamp: 'Stream on Bandcamp',
  instagram: 'Follow us on Instagram',
  facebook: 'Like us on Facebook',
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
  margin: ${props => (props.withIcons ? '1em 0' : '1em')};
  padding-left: 0;

  & > li { 
    display: ${props => (props.withIcons ? 'block' : 'list-item')};
    img {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      padding-right: 0.5em;
    }
  }
`;

const Services = ({ type, withIcons, ...services }) => {
  switch (type) {
    case 'list':
      return (
        <List withIcons={withIcons}>
          {
            Object.keys(services).map(name => (
              <li key={name}>
                { withIcons && <ServiceIcon name={name} /> }
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
  withIcons: PropTypes.bool,
  apple: PropTypes.string,
  tidal: PropTypes.string,
  spotify: PropTypes.string,
  itunes: PropTypes.string,
  youtube: PropTypes.string,
};

Services.defaultProps = {
  withIcons: false,
};

export default Services;
