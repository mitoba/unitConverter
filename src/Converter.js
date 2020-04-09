import React from "react";
import { Table } from "react-bootstrap";

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberInput: 100,
      unit: "celsius",
      targetUnit: "fahrenheit",
      response: 200,
      output: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOutput = this.handleOutput.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.response !== this.state.response) {
      this.handleOutput();
    }

    if (prevState.numberInput !== this.state.numberInput) {
      this.handleOutput();
    }

    if (prevState.unit !== this.state.unit) {
      this.handleOutput();
    }

    if (prevState.targetUnit !== this.state.targetUnit) {
      this.handleOutput();
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    this.handleOutput();
  }

  handleOutput() {
    const unit = this.state.unit.toLowerCase();
    const targetUnit = this.state.targetUnit.toLowerCase();
    const convertion = `${unit}to${targetUnit}`;
    const numberInput = Math.round(this.state.numberInput * 10) / 10;
    const response = Math.round(this.state.response * 10) / 10;

    console.log(convertion);

    let numberOutput;
    let output = "incorrect";

    switch (convertion) {
      case "celsiustokelvin":
        numberOutput = Math.round((numberInput + 273.15) * 10) / 10;
        break;

      case "celsiustofahrenheit":
        numberOutput = Math.round(((numberInput * 9) / 5 + 32) * 10) / 10;
        break;

      case "celsiustorankine":
        numberOutput = Math.round(((numberInput * 9) / 5 + 491.67) * 10) / 10;
        break;

      case "kelvintocelsius":
        numberOutput = Math.round((numberInput - 273.15) * 10) / 10;
        break;

      case "kelvintofahrenheit":
        numberOutput =
          Math.round((((numberInput - 273.15) * 9) / 5 + 32) * 10) / 10;
        break;

      case "kelvintorankine":
        numberOutput = Math.round(numberInput * 1.8 * 10) / 10;
        break;

      case "fahrenheittocelsius":
        numberOutput = Math.round((((numberInput - 32) * 5) / 9) * 10) / 10;
        break;

      case "fahrenheittorankine":
        numberOutput = Math.round((numberInput + 459.67) * 10) / 10;
        break;

      case "fahrenheittokelvin":
        numberOutput =
          Math.round((((numberInput - 32) * 5) / 9 + 273.15) * 10) / 10;
        break;

      case "rankinetocelsius":
        numberOutput = Math.round((((numberInput - 491.67) * 5) / 9) * 10) / 10;
        break;

      case "rankinetofahrenheit":
        numberOutput = Math.round((numberInput - 459.67) * 10) / 10;
        break;

      case "rankinetokelvin":
        numberOutput = Math.round(((numberInput * 5) / 9) * 10) / 10;
        break;

      case "tablespoonstocubic-inches":
        numberOutput = Math.round((numberInput / 1.108) * 10) / 10;
        break;

      case "tablespoonstocups":
        numberOutput = Math.round((numberInput / 16) * 10) / 10;
        break;

      case "tablespoonstocubic-feet":
        numberOutput = Math.round((numberInput / 1915) * 10) / 10;
        break;

      case "tablespoonstogallons":
        numberOutput = Math.round((numberInput / 256) * 10) / 10;
        break;

      case "tablespoonstoliters":
        numberOutput = Math.round((numberInput / 67.628) * 10) / 10;
        break;

      case "cubic-inchestocups":
        numberOutput = Math.round((numberInput / 14.438) * 10) / 10;
        break;

      case "cubic-inchestocubic-feet":
        numberOutput = Math.round((numberInput / 1728) * 10) / 10;
        break;

      case "cubic-inchestogallons":
        numberOutput = Math.round((numberInput / 231) * 10) / 10;
        break;

      case "cubic-inchestotablespoons":
        numberOutput = Math.round(numberInput * 1.108 * 10) / 10;
        break;

      case "cubic-inchestoliters":
        numberOutput = Math.round((numberInput / 61.024) * 10) / 10;
        break;

      case "cupstocubic-feet":
        numberOutput = Math.round((numberInput / 120) * 10) / 10;
        break;

      case "cupstogallons":
        numberOutput = Math.round((numberInput / 16) * 10) / 10;
        break;

      case "cupstotablespoons":
        numberOutput = Math.round(numberInput * 16 * 10) / 10;
        break;

      case "cupstocubic-inches":
        numberOutput = Math.round(numberInput * 14.438 * 10) / 10;
        break;

      case "cupstoliters":
        numberOutput = Math.round((numberInput / 4.227) * 10) / 10;
        break;

      case "cubic-feettogallons":
        numberOutput = Math.round(numberInput * 7.481 * 10) / 10;
        break;

      case "cubic-feettotablespoons":
        numberOutput = Math.round(numberInput * 1915.01 * 10) / 10;
        break;

      case "cubic-feettocubic-inches":
        numberOutput = Math.round(numberInput * 1728 * 10) / 10;
        break;

      case "cubic-feettocups":
        numberOutput = Math.round(numberInput * 120 * 10) / 10;
        break;

      case "cubic-feettoliters":
        numberOutput = Math.round(numberInput * 28.317 * 10) / 10;
        break;

      case "gallonstotablespoons":
        numberOutput = Math.round(numberInput * 256 * 10) / 10;
        break;

      case "gallonstocubic-inches":
        numberOutput = Math.round(numberInput * 231 * 10) / 10;
        break;

      case "gallonstocups":
        numberOutput = Math.round(numberInput * 16 * 10) / 10;
        break;

      case "gallonstocubic-feet":
        numberOutput = Math.round(numberInput * 7.481 * 10) / 10;
        break;

      case "gallonstoliters":
        numberOutput = Math.round(numberInput * 3.785 * 10) / 10;
        break;

      case "literstotablespoons":
        numberOutput = Math.round(numberInput * 67.628 * 10) / 10;
        break;

      case "literstocubic-inches":
        numberOutput = Math.round(numberInput * 61.024 * 10) / 10;
        break;

      case "literstocups":
        numberOutput = Math.round(numberInput * 4.227 * 10) / 10;
        break;

      case "literstocubic-feet":
        numberOutput = Math.round((numberInput / 28.317) * 10) / 10;
        break;

      case "literstogallons":
        numberOutput = Math.round((numberInput / 3.785) * 10) / 10;
        break;

      default:
        numberOutput = "invalid";
    }

    console.log(numberOutput);

    if (numberOutput === "invalid") {
      output = "invalid";
    }

    if (numberOutput === response) {
      output = "correct";
    }

    this.setState({
      output: output,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Input Numerical Value</th>
              <th>Input Unit of Measure</th>
              <th>Target Unit of Measure</th>
              <th>Student Response</th>
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <input
                  placeholder='Number'
                  name='numberInput'
                  type='number'
                  value={this.state.numberInput}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>
                <input
                  placeholder='Unit'
                  name='unit'
                  type='text'
                  value={this.state.unit}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>
                <input
                  placeholder='Unit'
                  name='targetUnit'
                  type='text'
                  value={this.state.targetUnit}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>
                <input
                  placeholder='Response'
                  name='response'
                  type='text'
                  value={this.state.response}
                  onChange={this.handleInputChange}
                />
              </td>
              <td>
                <input
                  placeholder='Output'
                  name='output'
                  type='text'
                  value={this.state.output}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <div>
          <h3>Use the following units for convertions</h3>
          <ul>
            <li>
              temperatures between Kelvin, Celsius , Fahrenheit , and Rankine
            </li>
            <li>
              volumes between liters , tablespoons , cubic-inches, cups ,
              cubic-feet, and gallons
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Converter;
