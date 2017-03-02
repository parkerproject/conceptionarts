import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const styles = flush();
    return { html, head, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/libs/bootstrap4/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/libs/bootstrap4/css/bootstrap-flex.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/libs/font-awesome/css/font-awesome.min.css"
          />
          <link rel="stylesheet" type="text/css" href="/static/css/fonts.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/main.css" />
          <link rel="stylesheet" type="text/css" href="/static/css/media.css" />
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
