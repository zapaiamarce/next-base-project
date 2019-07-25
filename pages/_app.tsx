import React from 'react';
import App, { Container } from 'next/app';
import WithTheme from "components/with-theme"

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <WithTheme>
          <Component {...pageProps} />
        </WithTheme>
      </Container>
    );
  }
}

export default MyApp;