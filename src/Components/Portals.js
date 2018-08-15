import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nathan from './Context';

const portalRoot = document.querySelector('#portal');

export default class Portal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div className="mdc-card my-card mdc-card__actions">
        <div className="mdc-card__media-content">Title</div>
        <Nathan />
        <div className="mdc-card__action-buttons">
          <button className="mdc-button mdc-card__action mdc-card__action--button">Read</button>
          <button className="mdc-button mdc-card__action mdc-card__action--button">Bookmark</button>
        </div>
      </div>,
      portalRoot
    );
  }
}
