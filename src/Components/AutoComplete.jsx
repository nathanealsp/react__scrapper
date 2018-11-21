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
      active: false,
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

    if (e.currentTarget.value.length === 0) {
      this.setState({ showMe: false });
    }

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
      active: true,
    });
  };

  onclickTwo = () => {
    const { suggestions } = this.props;
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: suggestions,
      showSuggestions: true,
      showMe: !this.state.showMe,
      active: true,
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
      active: false,
    });
  };

  // Event fired when the user presses a key down
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    console.log(e.keyCode);
    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
        showMe: false,
        active: false,
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

  handleFocus = () => {
    this.setState({
      active: true,
    });
  };

  // handlePointer = () => {
  //   console.log('Pointer Out');
  //   this.setState({
  //     active: false,
  //   });
  // };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      onclickTwo,
      state: { activeSuggestion, filteredSuggestions, showSuggestions, userInput, showMe, active },
    } = this;
    console.log(userInput);
    let suggestionsListComponent;

    if ((showSuggestions && userInput) || showMe) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className={filteredSuggestions.length > 5 ? 'suggestionsPlus' : 'suggestions'}>
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
      }
      // else {
      //   suggestionsListComponent = (
      //     <div className="no-suggestions">
      //       <em>No suggestions, you're on your own!</em>
      //     </div>
      //   );
      // }
    }

    return (
      <Fragment>
        <Wrapper>
          <div className={active ? 'actived' : null} onMouseLeave={this.handlePointer}>
            <input
              type="text"
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={userInput}
              onClick={onclickTwo}
              placeholder="Search for input.."
              onFocus={this.handleFocus}
            />

            {suggestionsListComponent}
          </div>
        </Wrapper>
      </Fragment>
    );
  }
}

export default AutoComplete;

const Wrapper = styled.div`
  .actived {
    border: 2px solid rgb(81, 128, 202);
    border-radius: 3px;
  }
  margin: 50px auto;
  width: 350px;
  text-align: left;
  font-size: 14px;
  input[type='text'] {
    line-height: 32px;
    width: 100%;
    outline: none;
    border: none;
    padding-left: 8px;
    background: #f8f9f9;
    border-radius: 3px;
  }

  .suggestions {
  }

  ul {
    list-style: none;
    background: #f8f9f9;
  }

  .suggestionsPlus {
    height: 150px;
    overflow-y: auto;
    :: -webkit-scrollbar {
      width: 9px;
    }
    /* Track */
    :: -webkit-scrollbar-track {
      background: #d9d8da;
    }
    /* Handle */
    :: -webkit-scrollbar-thumb {
      background: rgb(0, 44, 106);
    }
    /* Handle on hover */
    :: -webkit-scrollbar-thumb: hover {
      background: rgb(0, 44, 106);
    }
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
