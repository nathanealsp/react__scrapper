import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div className="md_modalx title">
        <div className="mdc-card ">
          <div className="mdc-card__media title">{this.props.title}</div>
          <div className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deleniti, ducimus modi
            iure molestias perferendis commodi numquam corrupti alias facilis. Voluptatem ipsam,
            tempora deserunt quam excepturi dolorum eveniet dolorem quis!
          </div>
          {/* <div className="mdc-card__actions"> */}
          <div className="mdc-card__action-icons mdc-card__actions">
            <button
              onClick={this.props.handle}
              className="mdc-button mdc-card__action mdc-card__action--button"
            >
              Close
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}
