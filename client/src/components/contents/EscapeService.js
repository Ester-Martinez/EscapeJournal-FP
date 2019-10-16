import axios from "axios";

class EscapeService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}user`,
      withCredentials: true
    });
  }

  addExperience = (escapeDone, roomDone, team, date, imgName, imgPath) => {
    return this.service
      .post("/add-experience", {
        escapeDone,
        roomDone,
        team,
        date,
        imgName,
        imgPath
      })
      .then(response => response.data)
      .catch(err => console.log(err));
  };
  addFriend = (friendName, friendEmail) => {
    return this.service
      .post("/add-friend", {
        friendName, friendEmail
      })
      .then(response => response.data)
      .catch(err => console.log(err));
  };
  allEscapes = () => {
    return this.service
      .get("/allescapes")
      .then(response => response.data)
      .catch(err => console.log(err));
  };
  allRooms = () => {
    return this.service
      .get("/allrooms")
      .then(response => response.data)
      .catch(err => console.log(err));
  };
  myFriends = () => {
    return this.service
      .get("/myfriends")
      .then(response => response.data)
      .catch(err => console.log(err));
  };
  myExperiences = () => {
    return this.service
      .get("/myexperiences")
      .then(response => response.data)
      .catch(err => console.log(err));
  };
  handleUpload(theFile) {
    // console.log('file in service: ', theFile)
    return this.service
      .post("/upload", theFile)
      .then(res => res.data)
      .catch(err => console.log(err));
  }
}

export default EscapeService;
