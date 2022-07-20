import axios from "axios"

const UserService = axios.create({
  baseURL: "http://localhost:8080"
});

export default UserService;