import React, { Component } from 'react';

const MyProvider = React.createContext();

class Context extends Component {
  state = {
    name: 'Nathaneals',
    age: 99,
    job: 'Developer',
  };
  render() {
    return (
      <div>
        <MyProvider.Provider
          value={{
            state: this.state,
          }}
        >
          {this.props.children}
        </MyProvider.Provider>
      </div>
    );
  }
}

export default class Nathan extends Component {
  render() {
    return (
      <div>
        <Context>
          <MyProvider.Consumer>
            {value => {
              const { name, age, job } = value.state;
              return (
                <div>
                  <p>{name}</p>
                  <p>{age}</p>
                  <p>{job}</p>
                </div>
              );
            }}
          </MyProvider.Consumer>
        </Context>
      </div>
    );
  }
}
