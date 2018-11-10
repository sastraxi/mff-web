import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Header from '../elements/Header';

const InstagridWrapper = styled.div`
`;

export default () => (
  <InstagridWrapper>
    <Helmet>
      <script
        src="//cdn.lightwidget.com/widgets/lightwidget.js"
      />
    </Helmet>
    <Header>Follow us on Instagram</Header>
    <iframe
      title="Instagram feed"
      src="http://lightwidget.com/widgets/a5cfff5bef345e838d8ee09ca1a18018.html"
      scrolling="no"
      allowtransparency="true"
      className="lightwidget-widget"
      style={{ width: '100%', border: 0, overflow: 'hidden' }}
    />
  </InstagridWrapper>
);
