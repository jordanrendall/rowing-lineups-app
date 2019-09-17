import React, { Component } from 'react';
import Meta from './Meta';
import Header from './Header';
import PageStyles, { GlobalStyle } from './styles/PageStyles';
import styled, { ThemeProvider } from 'styled-components';

const ContentWrapper = styled.main`
  padding: 15% 5% 15% 5%;
`;

const theme = {};

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <PageStyles>
            <Meta />
            <Header />
            <ContentWrapper>{this.props.children}</ContentWrapper>
          </PageStyles>
        </>
      </ThemeProvider>
    );
  }
}
