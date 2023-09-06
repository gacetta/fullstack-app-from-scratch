import React from "react";

export const AlgoSelector = (props) => {
  const algoArr = props.algos;

  const onChangeHandler = (e) => {
    // fetch specific algorithm
    console.log("selected algo id:", e.target.value);
  };

  return (
    <div className="algoSelector">
      <label id="algoSelector--label" htmlFor="algoSelector--dropdown">
        Select an algorithm
      </label>
      <select
        id="algoSelector--dropdown"
        name="algoSelector--dropdown"
        defaultValue="Select an algorithm"
        onChange={onChangeHandler}
        required
      >
        <option disabled>Select an algorithm</option>
        {algoArr.map((algo) => {
          return (
            <option key={algo.id} value={algo.id}>
              {algo.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
