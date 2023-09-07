import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ArgumentField } from "./ArgumentField";
import { AlgoResult } from "./AlgoResult";

export const AlgoRuntime = (props) => {
  const { args, _id } = props.algo;

  // process the args into proper shape for controlled input
  // {id: 1, type: 'number', value:''}
  let processedArgs = processArgs();

  function processArgs() {
    return args.map((arg, index) => ({
      id: index + 1,
      type: arg,
      value: "",
    }));
  }

  // update input fields when new algo is selected
  useEffect(() => {
    setInputFields(processArgs());
    setResult(null);
  }, [props.algo]);

  // local state
  const [inputFields, setInputFields] = useState(processedArgs);
  const [result, setResult] = useState(null);
  const [resultArgs, setResultArgs] = useState(null);
  const ref = useRef(null);

  // for controlled inputs
  const handleInputChange = (id, event) => {
    const newInputFields = inputFields.map((field) => {
      if (field.id === id) {
        return { ...field, value: event.target.value };
      }
      return field;
    });
    setInputFields(newInputFields);
  };

  const clearInputFields = () => {
    const newInputFields = inputFields.map((field) => {
      return { ...field, value: "" };
    });
    setInputFields(newInputFields);
  };

  const focusInputField = () => {
    ref.current.focus();
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
    setResultArgs(serializeArgs());
    axios
      .post(`/algos/${_id}/run`, {
        args: serializeArgs(),
      })
      .then((response) => {
        setResult(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
    clearInputFields();
    focusInputField();
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
              reference={ref}
            />
          );
        })}
      {result !== null && (
        <AlgoResult result={result} args={resultArgs} algo={props.algo} />
      )}
      <button className="algoRuntime--button" onClick={handleClick}>
        Run Algorithm
      </button>
    </section>
  );
};
