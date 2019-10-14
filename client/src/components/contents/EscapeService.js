import axios from 'axios';

class EscapeService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/user',
      withCredentials: true
    });
  }

  addExperience = (escapeDone, roomsDone, team, date, imgName, imgPath) => {
    return this.service.post('//add-experience', {escapeDone, roomsDone, team, date, imgName, imgPath})
    .then(response => response.data)
  }
  allEscapes = () => {
    return this.service.get('/allescapes')
    .then(response => response.data)
  }
  allRooms = () => {
    return this.service.get('/allrooms')
    .then(response => response.data)
  }
}

export default EscapeService;