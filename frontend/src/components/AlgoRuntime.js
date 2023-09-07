import React, { useState } from "react";
import { ArgumentField } from "./ArgumentField";
import { AlgoResult } from "./AlgoResult";

export const AlgoRuntime = (props) => {
  const { args } = props.algo;
  // process the array into proper shape for controlled input
  // {id: 1, type: 'number', value:''}
  const processedArgs = args.map((arg, index) => ({
    id: index + 1,
    type: arg,
    value: "",
  }));

  const [inputFields, setInputFields] = useState(processedArgs);
  const [result, setResult] = useState(null);

  const handleInputChange = (id, event) => {
    const newInputFields = inputFields.map((field) => {
      if (field.id === id) {
        return { ...field, value: event.target.value };
      }
      return field;
    });
    setInputFields(newInputFields);
  };

  // input: none
  // ouput: JSON string
  // coerces each argument input into correct datatype
  // JSON.stringify()
  const serializeArgs = () => {
    const argsToSerialize = inputFields.map((field) => {
      if (field.type === "number") return parseInt(field.value);
      else if (field.type === "boolean") return field.value === "true";
      else return field.value;
    });
    return JSON.stringify(argsToSerialize);
  };

  const handleClick = () => {
    console.log("Arg Values", inputFields);
    console.log(serializeArgs());
    setResult("SUCCESS");
  };

  return (
    <section className="algoRuntime">
      <p>Arguments:</p>
      {args.length &&
        inputFields.map((arg) => {
          return (
            <ArgumentField
              key={`${arg.id}-${arg.type}`}
              arg={arg}
              handleInputChange={handleInputChange}
            />
          );
        })}
      {result && (
        <AlgoResult result={result} algo={props.algo} args={serializeArgs()} />
      )}
      <button className="algoRuntime--button" onClick={handleClick}>
        Run Algorithm
      </button>
    </section>
  );
};
