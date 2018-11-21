import React, { Component } from 'react';
import { Portal, Modal, ToggleRenderPropRevisted, Prod, OtherModal } from 'Components';
import LoginPage from './Components/LoginPage';
import AutoComplete from './Components/AutoComplete';
import SelectBox from './Components/select-box/Selector';
import Selector from './Components/select-box/Selector@';

import './App.css';

const data = [
  'Alligator',
  'Bask',
  'Crocodilian',
  'Death Roll',
  'Eggs',
  'Jaws',
  'Reptile',
  'Solitary',
  'Tail',
  'Wetlands',
];

const items = [
  { value: 'United States', id: 1 },
  { value: 'Great Britian', id: 21 },
  { value: 'Mexico', id: 43 },
  { value: 'Canada', id: 2 },
];
class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <h1 className="app-title">ADVANCED REACT CONCEPTS</h1>
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
        <LoginPage /> */}
        <h1>React Autocomplete Demo</h1>
        <h2>Start typing and experience the autocomplete wizardry!</h2>
        <AutoComplete suggestions={[...data]} />
        {/* <SelectBox name="venue[country_id]" items={{ ...items }} /> */}

        <Selector suggestions={[...data]} />
      </div>
    );
  }
}

export default App;
