import { Component } from 'react';
import ReactDOM from 'react-dom';

// THIS WHERE THE COMPONENT WILL BE RENDERED
const portalRoot = document.querySelector('#portal');

class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
