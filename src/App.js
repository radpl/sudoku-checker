import React, { Component } from 'react'
import './App.css';
import SudokuForm from './SudokuForm';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      solvedSudoku: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      initialSudoku: value,
      solvedSudoku: []
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  calculate() {

  }

  render() {
    return (
      <div className="container">
        <h1>Sudoku Checker</h1>
        <div>
          <SudokuForm
            value={this.state.initialSudoku}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </div>
        <div>
          <h2>Calculation result</h2>
          <ResultTable data={this.state.solvedSudoku} />
        </div>
      </div>
    );
  }
}

