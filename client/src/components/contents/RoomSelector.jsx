import React from 'react';
import Select from 'react-select';

const options= (rooms, escape)=> {
  let filteredRooms = []
  rooms.forEach(element => {
    if (element.escape === escape){
      filteredRooms.push(element)
    }
  });
  let options = filteredRooms.map(room => {
    return {
    label: room.name,
    value: room._id}
  })
  return options
}

class RoomSelector extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState(
      { selectedOption },
      () => this.props.updateRoomDone(this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options(this.props.rooms, this.props.escape)}
      />
    );
  }
}
export default RoomSelector;