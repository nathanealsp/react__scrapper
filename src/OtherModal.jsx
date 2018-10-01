import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// THIS WHERE THE COMPONENT WILL BE RENDERED
const portalRoot = document.querySelector('#portal');

export default class OtherModal extends Component {
  constructor() {
    super();

    this.el = document.createElement('div');
  }

  componentWillMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(<div>Other Portal</div>, this.el);
  }
}
