import 'semantic-ui-css/components/header.css'
import Head from 'next/head'

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Head>
          <link rel='stylesheet' href='/_next/static/style.css' />
        </Head>
        <p>Hello world!</p>
      </div>
    );
  }
}

export default App;
