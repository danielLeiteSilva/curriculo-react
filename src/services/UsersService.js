import axios from "axios"

const UserService = axios.create({
  baseURL: "https://curriculo-backend.herokuapp.com"
});

export default UserService;