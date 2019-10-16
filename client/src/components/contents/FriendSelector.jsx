import React from 'react';
import Select from 'react-select';

const options= (escapes)=> {
  let options = escapes.map(escape => {
    return {
    label: escape.name,
    value: escape._id}
  })
  return options
}

class FriendSelector extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => this.props.updateEscapeDone(this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options(this.props.escapes)}
      />
    );
  }
}
export default FriendSelector;