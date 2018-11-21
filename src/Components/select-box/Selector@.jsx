import React, { Component } from 'react';
import styled from 'styled-components';

export default class Selector extends Component {
  render() {
    const { suggestions } = this.props;
    return (
      <Wrapper>
        <select className="custom-select">
          {suggestions.map(opt => <option className="select-items">{opt}</option>)}
        </select>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 50px auto;
  width: 350px;
  text-align: left;
  font-size: 14px;

  position: relative;

  select {
    all: unset;
    line-height: 32px;
    width: 100%;
    outline: none;
    border: none;
    padding-left: 8px;
    background: #f8f9f9;
    border-radius: 3px;
    // display: none;
  }

  .select-items {
    position: absolute;
    background-color: DodgerBlue;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
  }
`;
