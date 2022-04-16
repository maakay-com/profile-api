const {
  scanTNBCTransaction,
  checkConfirmation,
  processPayment,
} = require("../utils/tnbcTransactionHandler");

const scanTransaction = async (req, res) => {
  scanTNBCTransaction();
  checkConfirmation();
  processPayment();
  res.json({
    status: "Success",
    message: "Chain Scan Completed Successfully...",
  });
};

module.exports = { scanTransaction };
