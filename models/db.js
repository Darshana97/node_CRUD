const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/EmployeeDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("Mongodb conncetion succeeded");
    } else {
      console.log(`Errror in DB connection :` + err);
    }
  }
);

require("./employee.model");
