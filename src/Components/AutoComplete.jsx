import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

class AutoComplete extends Component {
  static defaultProps = {
    suggestions: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: '',
      showMe: false,
    };
  }

  // Event fired when the input value is changed
  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };

  onclickTwo = e => {
    console.log(e);
    const { suggestions } = this.props;
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: suggestions,
      showSuggestions: true,
      showMe: true,
    });
  };

  // Event fired when the user clicks on a suggestion
  onClick = e => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  // Event fired when the user presses a key down
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
        showMe: false,
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      onclickTwo,
      state: { activeSuggestion, filteredSuggestions, showSuggestions, userInput, showMe },
    } = this;
    console.log(userInput);
    let suggestionsListComponent;

    if ((showSuggestions && userInput) || showMe) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = 'suggestion-active';
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <Wrapper>
          <input
            type="text"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
            onClick={onclickTwo}
          />
          {suggestionsListComponent}
        </Wrapper>
      </Fragment>
    );
  }
}

export default AutoComplete;

const Wrapper = styled.div`
  margin: 50px auto;
  border: 2px solid #0079bf;
  border-radius: 3px;
  width: 350px;
  text-align: left;
  input[type='text'] {
    height: 36px;
    width: 100%;
    outline: none;
    border: none;
    padding-left: 8px;
  }

  .suggestions {
    list-style: none;
    background: #f8f9f9;
    max-height: 143px;
    overflow-y: auto;
  }

  li {
    line-height: 32px;
    padding-left: 16px;
    cursor: pointer;
  }

  .suggestion-active {
    background: #edeff0;
  }
`;
