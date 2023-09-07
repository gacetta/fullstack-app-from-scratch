import React from "react";

export const ArgumentField = (props) => {
  const { id, type, value } = props.arg;
  return (
    <div id={`argumentField${id}`}>
      <label className="ArgumentField--label" htmlFor={`arg${id}`}>
        {type}
      </label>
      <input
        className="ArgumentField--input"
        type="text"
        id={`arg${id}`}
        name={`arg${id}`}
        placeholder={`please enter a ${type}`}
        value={value}
        onChange={(e) => props.handleInputChange(id, e)}
      ></input>
    </div>
  );
};
