const { scanTNBCTransaction, checkConfirmation, upgradeUser } = require("../utils/tnbcTransactionHandler")

const scanTransaction = async (req, res) => {
    console.log("Scan Transaction function run..")
    scanTNBCTransaction();
    checkConfirmation();
    upgradeUser();
    res.json("hello")
}

module.exports = { scanTransaction }
