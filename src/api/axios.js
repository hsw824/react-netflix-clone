import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "804eb062c7df91b7a65ad1ce90458a89",
    language: "ko-KR",
  },
});

export default instance;
