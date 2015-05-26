import { default as React, Component } from 'react';
import { writeFile } from 'fs';
import Hero from './hero.jsx';

class Header extends Component {
  render () {
    return (
      <head>
        <meta charSet="UTF-8" />
        <title>David's Homepage</title>
      </head>
    );
  }
}

class Body extends Component {
  render () {
    return (
      <body>
        <Hero />
      </body>
    );
  }
}

class Page extends Component {
  render () {
    return (
      <html lang="en">
        <Header />
        <Body />
      </html>
    );
  }
}

const html = React.renderToString(<Page />);

writeFile('./index.html', html);

console.log(html);
