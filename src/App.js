import React, { Component } from 'react'
import './App.css';
import SudokuForm from './SudokuForm';
import ResultTable from './ResultTable';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      initialSudoku: `[
      "8,4,5,6,3,2,1,7,9",
      "7,3,2,9,1,8,6,5,4",
      "1,9,6,7,4,5,3,2,8",
      "6,8,3,5,7,4,9,1,2",
      "4,5,7,2,9,1,8,3,6",
      "2,1,9,8,6,3,5,4,7",
      "3,6,1,4,2,9,7,8,5",
      "5,7,4,1,8,6,2,9,3",
      "9,2,8,3,5,7,4,6,1"]`,
      arraySudoku: [],
      valuesRows: [],
      valuesCols: [],
      valuesSqrs: [],
      status: {
        rows: false,
        cols: false,
        sqrs: false
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      initialSudoku: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const sudoku = this.state.initialSudoku;
    const arrPre = JSON.parse(sudoku);
    const midArr = arrPre.reduce((acc, item) => acc.concat([item.split(",")]), []);
    const arrPost = arrPre.reduce((acc, item) => acc.concat(item.split(",").map(Number)), []);

    this.setState({
      arraySudoku: [...midArr]
    });

    this.calculate(arrPost);

  }

  calculate(arrPost) {
    //Calculate
    let rows = [];
    let cols = [];
    let sqrs = new Array(9).fill(0);
    for (let i = 0; i < 9; i++) {
      let sumRow = 0;
      let sumCol = 0
      for (let j = 0; j < 9; j++) {
        sumRow += arrPost[i * 9 + j];
        sumCol += arrPost[j * 9 + i];
        var t1 = Math.floor(j / 3);
        var t2 = Math.floor(i / 3);
        sqrs[t1 + t2 * 3] += arrPost[i * 9 + j];
      }
      rows.push(sumRow);
      cols.push(sumCol);
    }

    this.setState({
      valuesRows: [...rows],
      valuesCols: [...cols],
      valuesSqrs: [...sqrs],
      status: {
        rows: this.checkStatus(rows),
        cols: this.checkStatus(cols),
        sqrs: this.checkStatus(sqrs)
      }
    });

  }

  checkStatus(data) {
    return data.every(element => element === 45);
  }
  render() {
    debugger;
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
          <h2>Loaded sudoku</h2>
          <ResultTable
            data={this.state.arraySudoku}
            rows={this.state.valuesRows}
            cols={this.state.valuesCols}
            sqrs={this.state.valuesSqrs}
            status={this.state.status} />
        </div>
      </div>
    );
  }
}

