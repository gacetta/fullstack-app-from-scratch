import React from "react";

export const AlgoResult = (props) => {
  const trimmedArgs = props.args.slice(1, -1);
  const cleanedUpArgs = trimmedArgs.replaceAll(",", ", ");

  return (
    <div className="algoResult">
      <h3 className="algoResult--header">{`result of ${props.algo.name}(${cleanedUpArgs}):`}</h3>
      <p className="algoResult--result">{String(props.result)}</p>
    </div>
  );
};
