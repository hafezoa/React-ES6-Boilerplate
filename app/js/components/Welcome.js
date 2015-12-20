'use strict';

import React from 'react';

class Welcome extends React.Component {

  static propTypes = {
    who: React.PropTypes.string,
    accounts: React.PropTypes.string,
  };

  static defaultProps = {
    accounts: '[Twitter, Github, npm]',
  }

  state = {
    author: '@openDivision',
  };

  render() {
    return (
      <div className="success">
        <h1>Thanks for downloading the React-ES6-Boilerplate!</h1>
        <p>The fact that you can see this message means you are set up properly!</p>
        <p>Best of luck on all your projects!</p>
        <p>-{this.state.author} on: {this.props.accounts} | {this.props.who}</p>
      </div>
    );
  }
}



export default Welcome;
