import axios from "axios"

const UserService = axios.create({
  baseURL: "https://curriculo-backend-9ghl.vercel.app/"
});

export default UserService;
