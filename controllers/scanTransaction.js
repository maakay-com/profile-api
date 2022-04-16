const {
  scanTNBCTransaction,
  checkConfirmation,
  processPayment,
} = require("../utils/tnbcTransactionHandler");

const scanTransaction = async (req, res) => {
  console.log("Scan Transaction function run..");
  scanTNBCTransaction();
  checkConfirmation();
  processPayment();
  res.json("hello");
};

module.exports = { scanTransaction };
