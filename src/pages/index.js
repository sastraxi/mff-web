import React from 'react';
import { Link } from 'gatsby';

import Root from '../components/Root';
import Instagrid from '../components/Instagrid';
import Splash from '../components/Splash';

const IndexPage = () => (
  <Root>
    <Splash />
    <Instagrid />
    <Link to="/page-2/">Go to page 2</Link>
  </Root>
)

export default IndexPage;
