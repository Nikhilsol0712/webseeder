import axios from "axios";

const Base_url = "http://localhost:5000/";

export const getAllUsers = async () => {
  const response = await axios.get(Base_url + "getAllusers/");
  return response;
};
