import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "https://money-manager-1st.herokuapp.com/api/v1",
//   timeout: 1000,
});

export { instance };
