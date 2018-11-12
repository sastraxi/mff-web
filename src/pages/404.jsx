import React from 'react';
import styled from 'styled-components';

import Root from '../components/Root';
import Header from '../elements/Header';
import Divider from '../elements/Divider';
import Paragraph from '../elements/Paragraph';

const Container = styled.div`
  text-align: center;
  margin: 6em;
`;

const NotFoundPage = () => (
  <Root>
    <Container>
      <Header>NOT FOUND</Header>
      <Divider />
      <Paragraph>
        You just hit a route that doesn&#39;t exist.
      </Paragraph>
    </Container>
  </Root>
);

export default NotFoundPage;
