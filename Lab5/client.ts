import axios from "axios";
const REMOTE_SERVER = "http://localhost:4000";
export const fetchWelcomeMessage = async () => {
  const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
  return response.data;
};

  