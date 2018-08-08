import React, { Component } from 'react';

class ToggleRenderProp extends Component {
  state = {
    toggle: false,
  };

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    const { render } = this.props;
    return (
      <div>
        {render({
          message: 'Thats really cool',
          on: this.handleToggle,
          toggle: this.state.toggle,
        })}
      </div>
    );
  }
}

export default ToggleRenderProp;
