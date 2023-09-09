import React from "react";

export const ArgumentField = (props) => {
  const { id, type, value } = props.arg;
  return (
    <div id={`argumentField${id}`} className="argumentField  flex-col">
      <label className="argumentField--label" htmlFor={`arg${id}`}>
        {type}
      </label>
      <input
        className="argumentField--input inputControl"
        type="text"
        id={`arg${id}`}
        name={`arg${id}`}
        placeholder={`please enter a ${type}`}
        value={value}
        onChange={(e) => props.handleInputChange(id, e)}
        ref={id === 1 ? props.reference : null}
        autoFocus={id === 1 ? true : false}
      ></input>
    </div>
  );
};
