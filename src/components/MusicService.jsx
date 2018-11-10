import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import services from '../images/services';

const ServiceIcon = styled.img`
`;

const MusicService = ({ name }) => (
  <ServiceIcon src={services[name]} alt="" />
);

MusicService.propTypes = {
  name: PropTypes.oneOf(['apple-music', 'spotify', 'itunes']).isRequired,
};

export default MusicService;
