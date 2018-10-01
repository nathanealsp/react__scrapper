import React, { Component, createContext } from 'react';

const MyContext = createContext();

class Context extends Component {
  state = {
    name: 'Jira Atlassian',
    job: 'Senior React Developer',
  };

  render() {
    return (
      <div>
        <MyContext.Provider value={this.state}>{this.props.children}</MyContext.Provider>
      </div>
    );
  }
}

export default class Prod extends Component {
  render() {
    return (
      <div>
        <Context>
          <MyContext.Consumer>
            {value => <React.Fragment>{(value.name, value.name)}</React.Fragment>}
          </MyContext.Consumer>
        </Context>
      </div>
    );
  }
}
