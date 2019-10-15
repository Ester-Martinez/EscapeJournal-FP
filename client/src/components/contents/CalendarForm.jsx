import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker-cssmodules.css";

class CalendarForm extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState(
      { startDate: date },
      () => this.props.updateDate(this.state.startDate)
    );
  };
  // handleChange = date => {
  //   this.setState({
  //     startDate: date
  //   });
  // };

  render() {
    return (
      <DatePicker
        className="calendar"
        dateFormat={"dd/MM/yyyy"}
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}
export default CalendarForm;
