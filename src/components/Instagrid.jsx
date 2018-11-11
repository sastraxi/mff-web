import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Header from '../elements/Header';
import Paragraph from '../elements/Paragraph';

const InstagridWrapper = styled.div`
  & > iframe {
    max-width: 600px;
    margin: -2px;
  }
`;

export default () => (
  <InstagridWrapper>
    <Helmet>
      <script
        src="//cdn.lightwidget.com/widgets/lightwidget.js"
      />
    </Helmet>
    <Header>Follow us on Instagram</Header>
    <Paragraph>
      Show announcements, jam sessions, messages of love&nbsp;
      <a href="https://www.instagram.com/my_favourite_filter/">@my_favourite_filter</a>
    </Paragraph>
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
