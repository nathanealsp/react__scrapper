import React, { Component } from 'react';
import { Portal, Modal, ToggleRenderPropRevisted, Prod, OtherModal } from 'Components';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="app-title">ADVANCED REACT CONCEPTS</h1>
        {/* RENDER PROPS */}
        <ToggleRenderPropRevisted
          client={value => {
            const { greeting, handleClick, on } = value;
            return (
              <div>
                {on && (
                  <Portal className="bas">
                    <Modal title={greeting} handle={handleClick} />
                  </Portal>
                )}
                <button
                  className={
                    on ? 'mdc-button mdc-button--raised' : 'mdc-button mdc-button--outlined'
                  }
                  onClick={handleClick}
                >
                  TOGGLE
                </button>

                <h1>Context </h1>

                <Prod />
              </div>
            );
          }}
        />
        <OtherModal />
      </div>
    );
  }
}

export default App;
