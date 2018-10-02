import React, { Component } from 'react';

const MyContext = React.createContext();
class Context extends Component {
  state = {
    name: 'Nathaneals ',
    job: 'Senior UI developer',
  };
  render() {
    console.log(this);
    return <MyContext.Provider value={this.state.name}>{this.props.children}</MyContext.Provider>;
  }
}

class ContextConsumer extends Component {
  render() {
    console.log(this);
    return (
      <Context>
        <MyContext.Consumer>{value => <div>{value}</div>}</MyContext.Consumer>
      </Context>
    );
  }
}

export default ContextConsumer;
