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
    //Sets the user's requested date to compare with
    this.setState({
      stopDate: date
    });
  }

  handleChangeRaw = (e) => {
    //Makes the user unable to input own date formats
    e.preventDefault();
  }

  countDaysLeft = function () {
    //24h * 60min * 60sec * 1000millisec
    const oneDay = 24 * 60 * 60 * 1000;
    //Time in millisec between the dates divided by one day
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
          {/*The date picker that sets users' requested date*/}
          <DatePicker
            selected={this.state.stopDate}
            onChange={this.handleChange}
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