import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../Utilities/logo.svg';

export default class LoginPage extends Component {
  render() {
    return (
      <div className="steam-signup-form">
        <div className="front">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">Create your account</h1>
          <p>The ultimate entertainment platform</p>
          <p>Play, connect, create and more.</p>
          <p>
            <strong>It's free to join and easy to use.</strong>
          </p>

          <form className="form" action="">
            <label className="form__label" htmlFor="email">
              Your Email{' '}
              <span className="form__tooltip" data-tooltip="Please enter your email address">
                ?
              </span>
            </label>
            <input className="form__text" type="email" id="email" name="email" />
            <label className="form__label" htmlFor="password">
              Password{' '}
              <span
                className="form__tooltip"
                data-tooltip="Minimum 12 characters, at least one capital and one number"
              >
                ?
              </span>
            </label>
            <input className="form__text" type="password" id="password" name="password" />
            <label className="form__label" htmlFor="password-reenter">
              Re-enter password
            </label>
            <input
              className="form__text"
              type="password"
              id="password-reenter"
              name="password-reenter"
            />

            <p className="fineprint flex-center">
              <input className="form__checkbox" type="checkbox" id="agreement" name="agreement" />
              <label htmlFor="agreement">
                I am 13 years of age or older AND agree to the <a href="#">terms and serivces</a>.
              </label>
            </p>
            <p>
              <img
                className="recaptcha"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/recaptcha-dark.png"
                alt=""
              />
            </p>

            <button className="button">Sign up now</button>
            <a href="#" className="fineprint">
              I already have an account
            </a>
          </form>
        </div>

        <div className="back">
          <h2 className="subheading">Why join steam?</h2>
          <ul className="list list--unstyled">
            <li>Buy and download full retail games</li>
            <li>Join the Steam Community</li>
            <li>Chat with your friends while gaming</li>
            <li>Play your games on any supported platform</li>
            <li>Schedule a game, tournament, or LAN party</li>
            <li>Receive automatic game updates, and more!</li>
          </ul>
        </div>
      </div>
    );
  }
}
