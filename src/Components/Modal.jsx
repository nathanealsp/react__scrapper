import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div className="md_modalx">
        <div className="mdc-card my-card mdc-card__actions">
          {/* <div className="mdc-card__media-content">{this.props.title}</div>x */}
          <div className="mdc-card__media-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis adipisci ratione
            maxime eveniet deleniti aliquid provident. Ad, reprehenderit sint, quaerat aut inventore
            accusamus officiis debitis porro, consequatur quo cupiditate dolorem.
          </div>
          <div className="mdc-card__action-buttons">
            {/* <button className="mdc-button mdc-card__action mdc-card__action--button">Read</button> */}
            <button
              onClick={this.props.handle}
              className="mdc-button mdc-card__action mdc-card__action--button"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}
