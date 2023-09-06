import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { AlgoSelector } from "./AlgoSelector";

const testAlgos = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 3, name: "test3" },
];
const root = createRoot(document.getElementById("root"));

root.render(<AlgoSelector algos={testAlgos} />);
