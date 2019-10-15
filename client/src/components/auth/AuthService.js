import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}api/auth`,
      withCredentials: true
    });
  }

  signup = (username, password, email, name) => {
    return this.service
      .post("/signup", { username, password, email, name })
      .then(response => response.data)
      .catch(err => console.log(err));
  };
  checkUser = username => {
    return this.service
      .get("/checkUser", { username })
      .then(response => response.data)
      .catch(err => console.log(err));
  };
  login = (username, password) => {
    return this.service
      .post("/login", { username, password })
      .then(response => response.data)
      .catch(err => console.log(err));
  };

  loggedin = () => {
    return this.service
      .get("/currentUser")
      .then(response => response.data)
      .catch(err => console.log(err));
  };

  logout = () => {
    return this.service
      .get("/logout")
      .then(response => response.data)
      .catch(err => console.log(err));
  };
}

export default AuthService;
