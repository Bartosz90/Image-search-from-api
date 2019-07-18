import React from "react";
import "../styles/sass/Pictures.sass";

const Picture = props => {
  const pictures = props.pictures.map(picture => {
    return (
      <div key={picture.id} className="picture">
        <img src={picture.webformatURL} alt="example" />
        <h2>Author: {picture.user}</h2>
        <h3>
          <a href={picture.pageURL} target="_blank" rel="noopener noreferrer">
            SOURCE
          </a>
        </h3>
      </div>
    );
  });
  return <div className="picturesContainer">{pictures}</div>;
};

export default Picture;
