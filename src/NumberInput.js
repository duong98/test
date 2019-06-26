import React from 'react';
export default class NumberInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
      if (this.props.id === "number1"){  
        this.props.onHandleChange(e, "number1")
      }
      else {
        this.props.onHandleChange(e, "number2")
      }
    }
    render () {
        return (
          <div>
            <label htmlFor="number">NUmber 1 : </label>
            <input type="number" id="number" name="number" size="10" onChange={this.handleChange}></input>
          </div>
        )
    }
}