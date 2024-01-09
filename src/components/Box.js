import React from "react";

const Box = (props) => {
  return (
    <div className={`game_box ${props.result}`}>
      <h2>{props.player}</h2>
      <img className="choice_images" src={props.choice} alt="choice" />
    </div>
  );
};

export default Box;
