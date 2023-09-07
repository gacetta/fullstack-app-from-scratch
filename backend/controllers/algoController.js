const Algo = require("../models/Algo");

const algoController = {};

// MIDDLEWARE TO CREATE NEW ALGO
algoController.createNewAlgo = async (req, res, next) => {
  try {
    const newAlgo = req.body;
    res.locals.newAlgo = await Algo.create(newAlgo);
    return next();
  } catch (err) {
    return next({
      log: "algoController.createNewAlgo caught error",
      status: 500,
      message: { error: err.message },
    });
  }
};

// MIDDLEWARE TO GET ALL ALGOS
algoController.getAllAlgos = async (req, res, next) => {
  try {
    const allAlgos = await Algo.find({});
    res.locals.allAlgos = allAlgos;
    return next();
  } catch (err) {
    return next({
      log: "algoController.getAlgos caught error",
      status: 500,
      message: { error: err.message },
    });
  }
};

// MIDDLEWARE TO GET A SPECIFIC ALGO BY NAME
algoController.getAlgoById = async (req, res, next) => {
  try {
    const requestedAlgo = await Algo.findById(req.params._id);
    if (!requestedAlgo) throw new Error("requested algorithm not found");
    res.locals.requestedAlgo = requestedAlgo;
    return next();
  } catch (err) {
    return next({
      log: "algoController.getAlgos caught error",
      status: 500,
      message: { error: err.message },
    });
  }
};

// MIDDLEWARE TO RUN ALGO WITH ARGS
algoController.runAlgo = (req, res, next) => {
  const providedArgs = req.body.args;
  const deserializedArgs = JSON.parse(providedArgs);
  const { funcParams, funcBody } = res.locals.requestedAlgo;
  try {
    const functionToInvoke = new Function(...funcParams, funcBody);
    res.locals.result = functionToInvoke(...deserializedArgs);
    // res.locals.result = "test";
    return next();
  } catch (err) {
    return next({
      log: "algoController.getAlgos caught error",
      status: 500,
      message: { error: err.message },
    });
  }
};

module.exports = algoController;
