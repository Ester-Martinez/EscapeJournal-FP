import React from 'react';
import Select from 'react-select';

const options= (friends)=> {
  let options = friends.map(friend => {
    return {
    label: `${friend.friendName} <${friend.friendEmail}>`,
    value: friend._id}
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
      () => {this.props.updateTeam(this.state.selectedOption)}
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        isMulti
        value={selectedOption}
        onChange={this.handleChange}
        options={options(this.props.friends)}
      />
    );
  }
}
export default FriendSelector;