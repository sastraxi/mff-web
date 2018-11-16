import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Header from '../elements/Header';
import Paragraph from '../elements/Paragraph';

const InstagridWrapper = styled.div`
  & > iframe {
    width: 100%;
    max-width: 600px;
    margin: -2px;
    overflow: hidden;
    border: 0;
  }
`;

export default () => (
  <InstagridWrapper>
    <Helmet>
      <script src="//cdn.lightwidget.com/widgets/lightwidget.js" />
    </Helmet>
    <Header>Follow us on Instagram</Header>
    <Paragraph>
      Show announcements, jam sessions, messages of love&nbsp;
      <a href="https://www.instagram.com/my_favourite_filter/">@my_favourite_filter</a>
    </Paragraph>
    <iframe
      title="Instagram feed"
      src="//lightwidget.com/widgets/dcc1c0de75a35888a11e9c7949772fba.html"
      scrolling="no"
      allowtransparency="true" /* eslint-disable-line */
    />
  </InstagridWrapper>
);
