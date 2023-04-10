import React, { Component } from 'react';

class Animals extends Component {
  render() {
    return (
      <select>
        <option value="select">Select Animal</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="rabbit">Rabbit</option>
      </select>
    );
  }
}

class Birds extends Component {
  render() {
    return (
      <select>
        <option value="select">Select Bird</option>
        <option value="parrot">Parrot</option>
        <option value="canary">Canary</option>
        <option value="finch">Finch</option>
        <option value="pigeon">Pigeon</option>
      </select>
    );
  }
}

class PetSelector extends Component {
  render() {
    return (
      <div>
        <label htmlFor="animals">Animals:</label>
        <Animals id="animals" />
        <br />
        <label htmlFor="birds">Birds:</label>
        <Birds id="birds" />
      </div>
    );
  }
}
