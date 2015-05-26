import { default as React, Component } from 'react';
import radium from 'radium';
import color from 'color';

class Hero extends Component {
  render () {
    return (
      <div style={[styles.base]}>
        <h1>Hello World</h1>;
      </div>
    );
  }
}

export default radium.Enhancer(Hero);

const styles = {
  base: {
    width: '100%',
    height: 100,
    background: '#80B9FD'
  },

  ':hover': {
    background: color('#80B9FD').lighten(0.2).hexString()
  }
}
