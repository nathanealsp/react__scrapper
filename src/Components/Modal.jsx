import React, { Component } from 'react';
import styled from 'styled-components';

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

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(25, 25, 25, 0.8);
  z-index: 10;
`;

const ModalStyles = styled.div`
  border-radius: 2px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  min-width: 300px;
  z-index: 9999999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  color: #333333;
  font-size: 25px;
  font-weight: bold;
  max-height: 80vh;
`;
