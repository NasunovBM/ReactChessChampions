import React from "react";

const Champions = (props) => {
  return (
    <div>
      <p>Чемпион мира: {props.name}</p>
      <p>Чемпионские года: {props.years}</p>
      <button onClick={props.onChangeTitle}>Press</button>
    </div>
  );
};

export default Champions;
