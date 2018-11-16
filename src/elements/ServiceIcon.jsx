import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import services from '../images/services';

const Icon = styled.img`
`;

const ServiceIcon = ({ name }) => (
  <Icon src={services[name]} alt={`${name} icon`} />
);

ServiceIcon.propTypes = {
  name: PropTypes.oneOf(['apple-music', 'spotify', 'itunes']).isRequired,
};

export default ServiceIcon;
