import React from 'react';
import { Link } from 'gatsby';

import Root from '../components/Root';

const SecondPage = () => (
  <Root>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Root>
);

export default SecondPage;
