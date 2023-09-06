import React, { useEffect, useState } from "react";
import { AlgoSelector } from "./components/AlgoSelector";
import { AlgoDescription } from "./components/AlgoDescription";

const testAlgo1 = {
  id: "1",
  name: "algo1",
  description: "returns sum of adding 10 to provided argument",
  args: ["number", "number", "boolean"],
  returnValue: "number",
};

const testAlgo2 = {
  id: "2",
  name: "algo2",
  description: "returns gibberish",
  args: ["boolean"],
  returnValue: "string",
};

const testAlgo3 = {
  id: "3",
  name: "algo3",
  description: "does nothing and does it well",
  args: ["null"],
  returnValue: "null",
};

const testAlgos = [testAlgo1, testAlgo2, testAlgo3];

export const App = () => {
  const [allAlgos, setAllAlgos] = useState(null);
  const [selectedAlgo, setSelectedAlgo] = useState(null);

  //fetch all algos on first load
  useEffect(() => {
    console.log("fetching allAlgos");
    setAllAlgos(testAlgos);
  }, []);

  const handleAlgoSelect = (algoId) => {
    console.log("selecting algo:", algoId);
    const selectedAlgo = testAlgos.find((algo) => algo.id === algoId);
    setSelectedAlgo(selectedAlgo);
  };

  return (
    <>
      <AlgoSelector algos={allAlgos} handleAlgoSelect={handleAlgoSelect} />
      {selectedAlgo && <AlgoDescription algo={selectedAlgo} />}
    </>
  );
};
