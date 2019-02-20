import React from "react";
import DatePicker from "react-datepicker";
import "./App.css"
import "react-datepicker/dist/react-datepicker.css";

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
    return -Math.round((this.state.startDate.getTime() - this.state.stopDate.getTime()) / oneDay);
  }

  render() {

    return (

      <div id="parent">
        <div id="header">
          <h1 id="welcome">Welcome!</h1>
          <h3>Pick a date to see how far away it is from today!</h3>
        </div>
        <div id="content">
          <DatePicker
            selected={this.state.stopDate}
            onSelect={this.handleChange}
            onChangeRaw={this.handleChangeRaw}
            id="datepicker"
          />
          {
            this.countDaysLeft() < 0
              ? <h2>{-this.countDaysLeft()} days since </h2>
              : <h2>{this.countDaysLeft()} days until</h2>}
          <h2>{this.state.stopDate.toLocaleDateString("en-US")}</h2>
        </div>
      </div>

    );
  }
}

export default App;