import React from "react";


const Cell = (props) => (
  <div className="Cell">
    <img className ="Cell__image"src={require("../Images/Header/" + props.image).default} />
    <span className="Cell__text">{props.title}</span>
  </div>
);

export default Cell;