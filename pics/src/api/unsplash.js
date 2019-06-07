import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2c113dd23bd648dfe142dad68601e0acbf3c9c4650453f91478ecec1a5e03316"
  }
});
