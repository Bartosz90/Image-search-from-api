import React from "react";
import SearchForPicture from "./SearchForPicture";
import Picture from "./Picture";

class App extends React.Component {
  state = {
    pictures: [],
    inputValue: ""
  };
  handlePictureSearch = e => {
    e.preventDefault();
    this.setState({ pictures: [], inputValue: "" });
    fetch(
      `https://pixabay.com/api/?key=13072912-6005946fe1307b336cb17cc82&q=${
        this.state.inputValue
      }&image_type=photo&orientation=horizontal&per_page=30`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
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
          click={this.handlePictureSearch}
          inputValue={this.state.inputValue}
          change={this.handleInputValue}
        />
        <Picture pictures={this.state.pictures} />
      </div>
    );
  }
}

export default App;
