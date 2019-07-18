import React from "react";
import SearchForPicture from "./SearchForPicture";
import Picture from "./Picture";

class App extends React.Component {
  state = {
    pictures: [],
    inputValue: ""
  };
  handleRandomUserButton = e => {
    e.preventDefault();
    this.setState({ pictures: [], inputValue: "" });
    fetch(
      `https://pixabay.com/api/?key=13072912-6005946fe1307b336cb17cc82&q=${
        this.state.inputValue
      }&image_type=photo&lang=pl`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState(prevState => ({
          pictures: prevState.pictures.concat(data.hits)
        }));
      });
  };
  handleInputValue = e => {
    this.setState({ inputValue: e.target.value });
  };
  render() {
    return (
      <div>
        <SearchForPicture
          click={this.handleRandomUserButton}
          inputValue={this.state.inputValue}
          change={this.handleInputValue}
        />
        <Picture pictures={this.state.pictures} />
      </div>
    );
  }
}

export default App;
