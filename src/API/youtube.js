import axios from "axios";

const KEY = "AIzaSyBMZgOTKMXixFPTgsaLr9i7ks3jeBoEzZ4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
