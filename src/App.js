import React from "react";
import DatePicker from "react-datepicker";
import "./App.css"
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      stopDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      stopDate: date
    });
  }

  handleChangeRaw = (e) => {
    e.preventDefault();
  }

  countDaysLeft = function () {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((this.state.startDate.getTime() - this.state.stopDate.getTime()) / (oneDay)))
  }

  render() {
    return (

      <div id="parent">
        <div id="header">
          <h1 id="welcome">Welcome! Pick a date</h1>
        </div>
        <DatePicker
          selected={this.state.stopDate}
          onChange={this.handleChange}
          onChangeRaw={this.handleChangeRaw}
        />

        <h2>{this.countDaysLeft()} days left until {this.state.stopDate.toLocaleDateString("en-US")}</h2>
      </div>

    );
  }
}

export default App;