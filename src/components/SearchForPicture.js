import React from "react";
import pixabaylogo from "../images/pixabaylogo1.png";
import "../styles/sass/SearchForPicture.sass";

const SearchForPicture = props => {
  return (
    <>
      <form className="form">
        <input
          type="text"
          placeholder="search for an image..."
          value={props.inputValue}
          onChange={props.change}
        />
        <button onClick={props.click} type="submit">
          search
        </button>
        <div className="pixabay">
          <h2>API:</h2>
          <a
            href="https://pixabay.com/api/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pixabaylogo} alt="pixabay.com api" />
          </a>
        </div>
      </form>
    </>
  );
};

export default SearchForPicture;
