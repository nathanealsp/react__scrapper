import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    toggle: false,
  };

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <div>
        <button className=" mdc-button mdc-button--raised" onClick={this.handleToggle}>
          Toggle
        </button>
        {this.state.toggle && this.props.children}
      </div>
    );
  }
}

export default Toggle;
