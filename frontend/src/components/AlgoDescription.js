import React from "react";

export const AlgoDescription = (props) => {
  const { name, description, returnValue, args } = props.algo;
  const parameterTitle = args.length === 1 ? "Parameter:" : "Parameters:";
  return (
    <section className="algoDescription">
      <h2 className="label--large">{name}</h2>
      <h3 className="label--med">Description:</h3>
      <p className="body-text">{description}</p>
      <h3 className="label--med">{parameterTitle}</h3>
      <p className="body-text">
        {args.reduce((acc, curr) => {
          return `${acc}, ${curr}`;
        })}
      </p>
      <h3 className="label--med">Return Value</h3>
      <p className="body-text">{returnValue}</p>
    </section>
  );
};
