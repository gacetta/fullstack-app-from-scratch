import React from "react";

export const AlgoDescription = (props) => {
  const { name, description, returnValue, args } = props.algo;
  const parameterTitle = args.length === 1 ? "Parameter:" : "Parameters:";
  return (
    <section className="algoDescription">
      <h2 className="algoDescription--name">{name}</h2>
      <h3>Description:</h3>
      <p>{description}</p>
      <h3>{parameterTitle}</h3>
      <p>
        {args.reduce((acc, curr) => {
          return `${acc}, ${curr}`;
        })}
      </p>
      <h3>Return Value</h3>
      <p>{returnValue}</p>
    </section>
  );
};
