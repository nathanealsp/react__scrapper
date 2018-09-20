import React, { Component } from 'react';

// import Toggle from './Components/Toggle';
// import ToggleRenderProp from './Components/ToggleRenderProp';
// import Nathan from './Components/Context';
// import Portal from './Components/Portals';
import ToggleRevisted from './Components/ToggleRevisted';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">REACT UPDATES</h1>
        {/* <Toggle>
          <h1>BASIC TOGGLE</h1>
        </Toggle>
        <ToggleRenderProp
          render={({ on, message, toggle }) => (
            <div>
              <button className=" mdc-button mdc-button--raised" onClick={on}>
                RenderPropToggle
              </button>
              <h1>{toggle && message}</h1>
            </div>
          )}
        />
        <Toggle name="Context">
          <h1>{<Nathan />}</h1>
        </Toggle>
        <Toggle name="Portal">
          <h1>{<Portal />}</h1>
        </Toggle> */}
        <ToggleRevisted>
          <h1>Revisted Toggle</h1>
        </ToggleRevisted>
      </div>
    );
  }
}

export default App;
