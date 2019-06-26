import React, { Component } from 'react';
import NumberInput from './NumberInput'
import './App.css';
class App extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {

      result : 0,
    }
    this.num1 = 0
    this.num2 = 0
  }
  handleChange(e, num) {
    if (num === "number1") 
      {this.num1 = e.target.value}
    else {
      this.num2 = e.target.value
    }  
    console.log(this.num1)
    this.setState({result: parseInt(this.num1) + parseInt(this.num2)})
  }
  render() {
    return (
      <div>
        <NumberInput num={this.num} id="number1" onHandleChange={this.handleChange} /> <br />
        <NumberInput num={this.num} id="number2" onHandleChange={this.handleChange} /> <br />
        <div>{this.state.result}</div>
      </div>
    );
  }
}
export default App
