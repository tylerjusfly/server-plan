const express = require("express");
const createError = require("http-errors");
const app = express();

const PORT = process.env.PORT || 4242;

const serverPlannerRouter = require("./routes/serverplanner.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", serverPlannerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`The 👨‍🏭 server 🚗 is 🏃‍♀️ running 👡 on ⚓ port 🐹 ${PORT}, 🛒 let's 💅 go 😝 catch 🙀 it! 🍟`);
});
