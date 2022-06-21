const calculate = require("../services/serverPlanner.js");

exports.CalculateServers = (req, res, next) => {
  const { serverType, VM } = req.body;

  try {
    const response = calculate(serverType, VM);

    res.json({ NumbersOfServerNeeded: response });
  } catch (error) {
    next(error);
  }
};
