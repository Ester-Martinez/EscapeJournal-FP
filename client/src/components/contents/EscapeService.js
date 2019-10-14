import axios from 'axios';

class EscapeService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3010/user',
      withCredentials: true
    });
  }

  addExperience = (username, password) => {
    return this.service.post('//add-experience', {username, password})
    .then(response => response.data)
  }

}

export default EscapeService;