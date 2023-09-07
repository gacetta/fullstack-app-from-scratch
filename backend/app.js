const path = require("path");
const express = require("express");
const algoRouter = require("./routers/algoRouter");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle requests for static files
const srcPath = path.join(__dirname, "../", "frontend", "dist");
app.use(express.static(srcPath));

// router for algos
app.use("/algos", algoRouter);

// catch all route for requests to unknown route
app.use((req, res) =>
  res.status(404).send("No page, no algorithm, no problem")
);

// express error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught an error",
    status: 500,
    message: { error: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.error(errorObj.log);
  console.error(err); // Log the error object or message

  // Use the specified status code or default to 500
  const status = errorObj.status || 500;

  return res.status(status).json(errorObj.message);
});

module.exports = app;
