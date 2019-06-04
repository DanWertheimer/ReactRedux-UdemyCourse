import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props); // need to call the super function with props

    // THIS IS THE ONLY TIME WE DO DIRECT
    // ASSIGNMENT TO this.state
    this.state = { lat: null, errorMessage: "" }; // default numeic state to null

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // We called setState!!
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // MUST DEFINE THE RENDER METHOD
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
