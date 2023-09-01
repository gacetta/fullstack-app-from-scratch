const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;

const srcPath = path.join(__dirname, "../", "frontend", "dist");

app.use(express.static(srcPath));

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});
