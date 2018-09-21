import React, { Component } from 'react';

export default class ToggleRenderPropRevisted extends Component {
  state = {
    on: false,
  };
  handleToggle = () => {
    this.setState(
      {
        on: !this.state.on,
      },
      () => {
        console.log(this.state.on);
      }
    );
  };
  render() {
    const { client } = this.props;
    return (
      <div>
        {client({
          on: this.state.on,
          greeting: 'RenderPropRevisted',
          handleClick: this.handleToggle,
        })}
      </div>
    );
  }
}
