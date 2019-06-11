import Axios from "axios";

const KEY = "AIzaSyBgkb_CUGJ0K0Ny_tQBjF7k3eAcGQNI6qI"; //THIS IS PUBLIC

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
