import React from "react";

export const AlgoSelector = (props) => {
  const algoArr = props.algos;

  const onChangeHandler = (e) => {
    props.handleAlgoSelect(e.target.value);
  };

  return (
    <section className="algoSelector flex-col">
      <label
        id="algoSelector--label"
        htmlFor="algoSelector--dropdown"
        className="label--med"
      >
        Select an algorithm
      </label>
      <select
        id="algoSelector--dropdown"
        name="algoSelector--dropdown"
        defaultValue="Select an algorithm"
        className="inputControl"
        onChange={onChangeHandler}
        required
      >
        <option disabled>Select an algorithm</option>
        {algoArr &&
          algoArr.map((algo) => {
            return (
              <option key={algo._id} value={algo._id}>
                {algo.name}
              </option>
            );
          })}
      </select>
    </section>
  );
};
