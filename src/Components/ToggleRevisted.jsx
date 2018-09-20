import React, { Component } from 'react';

export default class ToggleRevisted extends Component {
  state = {
    on: false,
  };
  handleToggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };
  render() {
    return (
      <div>
        {this.state.on && this.props.children}
        <button
          className="mdc-button mdc-button--outlined"
          type="submit"
          onClick={this.handleToggle}
        >
          Toggle
        </button>
      </div>
    );
  }
}
