import React, { Component } from 'react';
import { Background, ModalStyles } from 'Utilities';

export default class Modal extends Component {
  render() {
    return (
      <div>
        <ModalStyles>
          <div className="modal_header">
            <div className="modal_title">{this.props.title}</div>
          </div>
          <div className="modal_body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam deleniti, ducimus modi
            iure molestias perferendis commodi numquam corrupti alias facilis. Voluptatem ipsam,
            tempora deserunt quam excepturi dolorum eveniet dolorem quis! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ullam deleniti, ducimus modi iure molestias perferendis
            commodi numquam corrupti alias facilis. Voluptatem ipsam, tempora deserunt quam
            excepturi dolorum eveniet dolorem quis! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ullam deleniti, ducimus modi iure molestias perferendis commodi
            numquam corrupti alias facilis. Voluptatem ipsam, tempora deserunt quam excepturi
            dolorum eveniet dolorem quis!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ullam deleniti, ducimus modi iure molestias perferendis commodi numquam corrupti alias
            facilis. Voluptatem ipsam, tempora deserunt quam excepturi dolorum eveniet dolorem quis!
          </div>

          <button className="mdc-button close" onClick={this.props.handle}>
            CLOSE
          </button>
        </ModalStyles>
        <Background className="background" onClick={this.props.handle} />
      </div>
    );
  }
}
