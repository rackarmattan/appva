import React from "react";
import DatePicker from "react-datepicker";

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

  countDaysLeft = function () {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((this.state.startDate.getTime() - this.state.stopDate.getTime()) / (oneDay)))
  }

  render() {
    return (

      <div id="parent">
        <h1>Welcome! Pick a date</h1>

        <DatePicker
          selected={this.state.stopDate}
          onChange={this.handleChange}
        />

        <h2>{this.state.stopDate.toLocaleDateString("en-US")}</h2>
        <h2>Days left: {this.countDaysLeft()}</h2>
      </div>

    );
  }
}

export default App;