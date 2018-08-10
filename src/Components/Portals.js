import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nathan from './Context';

const portalRoot = document.querySelector('#portal');

export default class Portal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="modal-window">
        <Nathan />
      </div>,
      portalRoot
    );
  }
}
